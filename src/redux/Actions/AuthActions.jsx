import { SIGN_IN_REQUEST,SIGN_UP_REQUEST,SIGN_UP_SUCCESS, SIGN_UP_ERROR,SIGN_OUT,
     SIGN_IN_SUCCESS, SIGN_IN_ERROR } from "../Types"




export const SignIn = (data, firebase, toast) =>{
    
    return (dispatch) =>{
        dispatch({type: SIGN_IN_REQUEST});
        firebase.auth().signInWithEmailAndPassword(data.email, data.password)
        .then(()=> {
            dispatch({type: SIGN_IN_SUCCESS })
            toast({
                title: "Login Successful.",
                description: "Your Login credentials matched",
                status: "success",
                duration: 9000,
                isClosable: true,
                position:"top"
              })
        }).catch((err)=>{
            dispatch({type: SIGN_IN_ERROR})
            toast({
                title: "An error occurred.",
                description: err.message,
                status: "error",
                duration: 9000,
                isClosable: true,
                position:"top"
              })
        })
    }
}


export const SignOut = (firebase) => {
    return (dispatch) =>{
        firebase.auth().signOut()
        .then(()=> dispatch({type: SIGN_OUT}))

    }
}

export const SignUp = (firebase,firestore, data, toast) => {
    return (dispatch) => {
        dispatch({type: SIGN_UP_REQUEST})
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        .then((response)=> {
            console.log(response);
            return firestore.collection('users').doc(response.user.uid).set({
                firstName: data.firstName,
                lastName: data.lastName,
                initial: data.firstName[0] + data.lastName[0]
            })
            }).then(()=>{
                dispatch({type: SIGN_UP_SUCCESS})
            }).catch(err =>{
                dispatch( {type: SIGN_UP_ERROR})
                toast({
                    title: "An error occurred.",
                    description: err.message,
                    status: "error",
                    duration: 9000,
                    isClosable: true,
                    position:"top"
                  })
                
            })
            
    }
}