import { combineReducers } from "redux";
import authReducer from "./AuthReducer";
import gistReducer from "./GistReducer";
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';


export const rootReducer= combineReducers({
    auth: authReducer,
    gists: gistReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})