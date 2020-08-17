import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import { ThemeSelector } from "../Utilities/ThemeSelector";
import SignInHeader from "./SignInHeader";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

const SignIn = () => {
  return (
    <Flex minHeight="100vh" width="full" align="center" justifyContent="center">
      <Box borderWidth={1}
        p={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
       
           
                    <LoginForm />
                   
             
      </Box>
    </Flex>
  );
};

export default SignIn;
