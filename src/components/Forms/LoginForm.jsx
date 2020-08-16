import React, {useState} from 'react'
import { Box, FormControl, FormLabel, Input, Stack, Checkbox, Link, Button } from '@chakra-ui/core'
import { Link as link } from 'react-router-dom';



const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')


    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(email, password);
    }
   

    return (
        <div>
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
        </div>
    )
}

export default LoginForm
