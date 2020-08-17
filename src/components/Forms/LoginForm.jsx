import React, {useState} from 'react'
import { Box, FormControl,Flex, FormLabel, Input, Stack, Checkbox,useToast, Link, Button } from '@chakra-ui/core'
import { Link as link, Redirect } from 'react-router-dom';
import { useFirebase } from 'react-redux-firebase';
import { useSelector, useDispatch } from 'react-redux';
import { SignIn } from '../../redux/Actions/AuthActions';


const LoginForm = () => {
    const toast = useToast();
    const dispatch = useDispatch();
    const firebase = useFirebase();

   
const auth = useSelector(state => state.firebase.auth)
console.log(useSelector(state=>state.firebase))
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const data = {
        email, password
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(SignIn(data, firebase, toast));
        
        
    }
   
    if(auth.uid) return <Redirect to="/" />

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
            <Box  textAlign="left">
            <form onSubmit={handleSubmit}>
                <FormControl>
                    <FormLabel >Email address</FormLabel>
                    <Input type="email" placeholder="Enter your mail address" value={email} onChange={handleEmail} />
                </FormControl>

                <FormControl mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input type="password" placeholder="Enter your mail password"value={password} onChange={handlePassword}/>
                </FormControl>

                <Stack isInline justifyContent="space-between" mt={4}>
                    <Box>
                        <Checkbox>Remember Me</Checkbox>
                    </Box>
                    <Box >
                        <Link color={"blue.500"}>Forgot your password?</Link>
                    </Box>
                </Stack>

                <Button type="submit" variantColor='blue' width="full" mt={4}>Login</Button>
                <Stack isInline justifyContent="center">
                <Box >
                    Not yet registered? <Link as={link}  to="/register" color={"blue.500"}> Register</Link>
                    </Box>
                </Stack>
            </form>
            </Box>
            </Box>

        </Flex>
    )
}

export default LoginForm
