import React from 'react';
import moment from 'moment';
import { Box, Heading, Stack, Text, Avatar } from '@chakra-ui/core'

const GistSummary = ({gist}) => {
    return (
        <Box padding="2rem"  my={3} mx={5} boxShadow="lg" justifyContent="center" align="center" >
            <Stack align="center" isInline>
                <Avatar  name={`${gist.authorFirstname} ${gist.authorLastname}`}/>
                <Stack ml={4}>
                <Text>{gist.authorFirstname} {gist.authorLastname}</Text>
                <Text fontSize="xs" color="gray.500">{moment(gist.createdAt.toDate()).calendar()} </Text>
                </Stack>
                
            </Stack>
            <Heading textAlign="center" as="h6" size="md" my={4} mx={"auto"}>{gist.title} </Heading>
        </Box>
    )
}

export default GistSummary
