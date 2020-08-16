import React from "react";
import { Box, Heading, Flex, Text, Button } from "@chakra-ui/core";
import { ThemeSelector } from "../Utilities/ThemeSelector";
import { Link } from "react-router-dom";
import SignedOut from "../auth/SingnedOut/SignedOut";

export const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link to='/'>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            hasta-La Gista
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        <svg
          fill="teal"
          width="12px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={{ sm: show ? "block" : "none", md: "flex" }}
        width={{ sm: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
      >
        <Link to="/login">
          
          <MenuItems>Login</MenuItems>
        </Link>
        <Link to="/register">
          <MenuItems>Register</MenuItems>
        </Link>
        <Link to="/add-gist">
          <MenuItems>Add Gist</MenuItems>
        </Link>
        <SignedOut/>
       
          <ThemeSelector />
        
      </Box>
    </Flex>
  );
};

export default Header;
