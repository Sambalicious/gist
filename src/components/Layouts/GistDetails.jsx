import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'
import { Box, Flex, Heading, Text, Divider, Spinner } from '@chakra-ui/core';
import moment from 'moment';

const GistDetails = (props) => {
    useFirestoreConnect(["gists"]);
    const id = props && props.match.params.id
    const gist = useSelector((state)=>{
      const gists =  state.firestore.data.gists
      const gist = gists ? gists[id] : null
      return gist
     
    } );
    console.log(gist)
    if(gist){

   
    return (
        <Flex justify="center" align="center">
            
            <Box padding="2rem" mx={{base: 2, md:8}} boxShadow="lg">  
                <Box>
                 <Heading my={3} color="blue.400" textAlign="center" as="h5" size="md">{gist.title} </Heading> 
                 <Text justify="center">{gist.gist} </Text>
                </Box>  
                <Divider my={4} />
                <Box color='blue.300'>
                    <Text>Posted by {gist.authorFirstname} {gist.authorLastname} </Text>
                    <Text>{moment(gist.createdAt.toDate()).calendar()}</Text>
                </Box>
            </Box>
        </Flex>
    )
} else{
    return (
        <Flex justify="center" align="center" minHeight="100vh">
 <Spinner
          thickness="4px"
          speed="0.65s"
          alignContent="center"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
        </Flex>
    )
}


}

export default GistDetails
