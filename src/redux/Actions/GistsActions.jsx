import { ADD_GIST_REQUEST, ADD_GIST_SUCCESS, ADD_GIST_ERROR
 } from "../Types"




export const AddGist = (data, firestore, toast) =>{
    return (dispatch, getState) =>{
        dispatch({type:ADD_GIST_REQUEST});

        const profile = getState().firebase.profile;
        console.log(profile);

        const authorId = getState().firebase.auth.uid
        firestore.collection('gists').add({
            ...data, 
            authorFirstname: profile.firstName,
            authorLastname: profile.lastName,
            createdAt: new Date(),
            authorId
        }).then((response)=>{
            dispatch({type: ADD_GIST_SUCCESS, payload:response})
            toast({
                title: "Hurray, You added a new gist",
                description: "Your gist has been added",
                status: "success",
                duration: 9000,
                isClosable: true,
                position:"top"
              })

        }).catch(err=>{
            dispatch({type: ADD_GIST_ERROR})
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