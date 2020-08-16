import React, {useState} from "react";
import { Flex, Box, FormControl, FormLabel, Input, Button, Textarea  } from "@chakra-ui/core";

const NewGist = () => {
    const [title, setTitle] = useState('');
    const [gist, setGist] = useState('');


    const handleTitle = e => {
        setTitle(e.target.value);

    }
    const handleGist = e => {
        setGist(e.target.value)    
    }

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(title, gist)
    }
  return (
    <Flex minHeight="70vh" width="full" align="center" justifyContent="center">
      <Box
        borderWidth={1}
        p={4}
        width="full"
        maxWidth="500px"
        borderRadius={4}
        textAlign="center"
        boxShadow="lg"
      >
        <Box my={8} textAlign="left">
          <form onSubmit={handleSubmit}>
            <FormControl mt={4}>
              <FormLabel>Title</FormLabel>
              <Input type="text"
                value={title}
                onChange={handleTitle}
               placeholder="Give Your gist a title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Content</FormLabel>
              <Textarea 
                
                value={gist}
                onChange={handleGist}
                placeholder="Enter the content of your gist here"
              />
            </FormControl>

            <Button type="submit" variantColor="blue" width="full" mt={5}>
              Add Gist
            </Button>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default NewGist;
