import React from 'react';
import MenuItems from "../../Layouts/MenuItems";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useFirebase } from 'react-redux-firebase';
import { SignOut } from '../../../redux/Actions/AuthActions' 

const SignedIn = () => {

    const firebase = useFirebase();
    const dispatch = useDispatch();
    return (
        <>
            <Link to="/add-gist">
          <MenuItems>Add Gist</MenuItems>
        </Link>
        
        <Link to="/notifications">
          <MenuItems>Notifications</MenuItems>
        </Link>

        <a href="/" onClick={()=>dispatch(SignOut(firebase))}>
          <MenuItems>Log Out</MenuItems>
        </a>
        
        </>
    )
}

export default SignedIn
