import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase'
import { Box, Flex, Heading, Text } from '@chakra-ui/core';
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
    return (
        <Flex justify="center" align="center">
            { }
            <Box padding="2rem" boxShadow="lg">  
                <Box>
                 <Heading as="h5" size="md">{gist.title} </Heading> 
                 <Text>{gist.gist} </Text>
                </Box>  
                <Box bg="gray.500">
                    <Text>Posted by {gist.authorFirstname} {gist.authorLastname} </Text>
                    <Text>{moment(gist.createdAt.toDate()).calendar()}</Text>
                </Box>
            </Box>
        </Flex>
    )
}

export default GistDetails
