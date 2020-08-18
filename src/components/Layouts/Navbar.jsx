import React from "react";
import { Box, Heading, Flex} from "@chakra-ui/core";
import { ThemeSelector } from "../Utilities/ThemeSelector";
import { Link } from "react-router-dom";
import SignedOut from "../auth/SingnedOut/SignedOut";
import SignedIn from "../auth/SignedIn/SignedIn";
import { useSelector } from 'react-redux';


// Note: This code could be better, so I'd recommend you to understand how I solved and you could write yours better :)
const Header = (props) => {



  const auth = useSelector(state => state.firebase.auth)
    const profile = useSelector(state => state.firebase.profile);
    const links = auth.uid ? <SignedIn profile={profile} /> : <SignedOut />
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.7rem"
      color="blue.400"
      boxShadow="lg"
      {...props}
    >
      <Flex align="center" m={8}>
        <Link to='/'>
          <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
            hasta-La Gista
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: "block", md: "none" }} mr={3} onClick={handleToggle}>
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
        mx={3}
      >
        {links}
       
        <ThemeSelector />
      </Box>
      
     
    </Flex>
  );
};

export default Header;
