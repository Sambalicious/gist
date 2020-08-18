const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello This is Sambalicious from firebase!");
});
 
const createNotification = (notification => {
    return admin.firestore().collection('notifications').add(notification)
    .then(doc => console.log("notification added", doc))
})

exports.projectedCreated = functions.firestore.document('gists/{gistId}').onCreate(doc =>{
    const gist = doc.data();

    const notification ={
        content: "Added a new gist",
        user: `${gist.authorFirstname} ${gist.authorLastname}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification)
});

exports.UserJoined = functions.auth.user().onCreate(user => {
    return admin.firestore().collection('users').doc(user.uid).get().then(doc =>{
        const newUser = doc.data();
        const notification = {
            content: 'Joined Hasta-La Gista',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
})