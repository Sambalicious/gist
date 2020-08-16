import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyD8D7x_KxW_hgzYTn5aCC8ev1uqEVZjQTc",
    authDomain: "hastalagista.firebaseapp.com",
    databaseURL: "https://hastalagista.firebaseio.com",
    projectId: "hastalagista",
    storageBucket: "hastalagista.appspot.com",
    messagingSenderId: "366846073030",
    appId: "1:366846073030:web:408d674f4b1fce64695fc7",
    measurementId: "G-600VLJ9PP7"
  };

   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   firebase.firestore();
 
 
 
   export default firebase;