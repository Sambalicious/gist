import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input,Link,useToast, Flex, Button, Stack } from '@chakra-ui/core';
import { Link as link, Redirect } from 'react-router-dom';
import { useFirestore, useFirebase } from "react-redux-firebase";
import { useDispatch, useSelector } from 'react-redux';
import { SignUp } from '../../redux/Actions/AuthActions'


const RegisterForm = () => {
    const toast = useToast();
    const firestore = useFirestore();
    const firebase = useFirebase();
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('');

    const auth =  useSelector(state=> state.firebase.auth)


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

    const data ={ firstName, lastName, password, email}

    const handleSubmit = e=>{
        e.preventDefault();
        console.log(firstName, lastName, password, email)
        dispatch(SignUp(firebase, firestore, data, toast));
    }

    if(auth.uid) return <Redirect to="/" />
    
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
