import React from 'react'
import { Box, Heading, Link, Text } from '@chakra-ui/core'
import { Link as link } from 'react-router-dom';
const SignInHeader = () => {
    return (
      <div>
        <Box>
          <Heading>Sign In to your account </Heading>
          <Text>
          
           
            Or <Link color={"blue.500"} as={link} to="/register">Sign Up</Link>
            
          </Text>
        </Box>
      </div>
    );
}

export default SignInHeader
