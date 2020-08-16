import React from 'react';
import MenuItems from "../../Layouts/MenuItems";
import { Link } from "react-router-dom";

const SignedIn = () => {
    return (
        <>
            <Link to="/add-gist">
          <MenuItems>Add Gist</MenuItems>
        </Link>
        <Link to="/notifications">
          <MenuItems>Notifications</MenuItems>
        </Link>
        
        </>
    )
}

export default SignedIn
