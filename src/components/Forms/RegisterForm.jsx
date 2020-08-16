import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input,Link, Flex, Button, Stack } from '@chakra-ui/core';
import { Link as link } from 'react-router-dom';



const RegisterForm = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');




    const handleFirstName = e =>{
        setFirstName(e.target.value)
    }
    const handleLastName = e =>{
        setLastName(e.target.value)
    }
    const handlePassword = e =>{
        setPassword(e.target.value)
    }
    const handleEmail = e =>{
        setEmail(e.target.value)
    }

    const handleSubmit = e=>{
        e.preventDefault();
        console.log(firstName, lastName, password, email)
    }
    return (
        <Flex minHeight="90vh" width="full" align="center" justifyContent="center">
        <Box borderWidth={1}
          p={2}
          width="full"
          maxWidth="500px"
          borderRadius={4}
          textAlign="center"
          boxShadow="lg"
        >
        
        <Box my={3} p={4} textAlign="left">
            <form onSubmit={handleSubmit}>
            <FormControl mt={4}>
                    <FormLabel >First Name</FormLabel>
                    <Input type="text" value={firstName} onChange={handleFirstName} placeholder="Enter your first name"/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel >Last Name</FormLabel>
                    <Input type="text" value={lastName} onChange={handleLastName} placeholder="Enter your last name"/>
                </FormControl>


                <FormControl mt={4} >
                    <FormLabel >Email address</FormLabel>
                    <Input type="email" value={email} onChange={handleEmail} placeholder="Enter your mail address"/>
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" value={password} onChange={handlePassword} placeholder="Enter your password"/>
                </FormControl>



                <Button type="submit" variantColor='blue' width="full" mt={4}>Register</Button>
                <Stack isInline justifyContent="center">
                <Box >
                    Already Registered? <Link as={link}  to="/login" color={"blue.500"}> Login</Link>
                    </Box>
                </Stack>
               
            </form>
            </Box>
        </Box>
    </Flex>
    )
}

export default RegisterForm;
