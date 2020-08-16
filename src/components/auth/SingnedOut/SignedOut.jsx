import React from "react";
import MenuItems from "../../Layouts/MenuItems";
import { Link } from "react-router-dom";

const SignedOut = () => {
  return (
    <>
      <Link to="/login">
        <MenuItems>Login</MenuItems>
      </Link>
      <Link to="/register">
        <MenuItems>Register</MenuItems>
      </Link>
    </>
  );
};

export default SignedOut;
