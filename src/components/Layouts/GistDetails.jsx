import React from "react";
import { useSelector } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";
import { Box, Flex, Heading, Text, Divider, Spinner } from "@chakra-ui/core";
import moment from "moment";

const GistDetails = (props) => {
  useFirestoreConnect(["gists"]);
  const id = props && props.match.params.id;
  const gist = useSelector((state) => {
    const gists = state.firestore.data.gists;
    const gist = gists ? gists[id] : null;
    return gist;
  });
  if (gist) {
    return (
      <Flex justify="center" align="center">
        <Box padding="2rem" mx={{ base: 2, md: 8 }} boxShadow="lg">
          <Box>
            <Heading
              my={3}
              color="blue.400"
              textAlign="center"
              as="h5"
              size="md"
            >
              {gist.title}{" "}
            </Heading>
            <Text my={3} justify="center">
              {gist.gist}{" "}
            </Text>
          </Box>
          <Divider my={4} />
          <Box>
            <Text color="blue.300">
              Posted by {gist.authorFirstname} {gist.authorLastname}{" "}
            </Text>
            <Text color="tomato">
              {moment(gist.createdAt.toDate()).calendar()}
            </Text>
          </Box>
        </Box>
      </Flex>
    );
  } else {
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
    );
  }
};

export default GistDetails;
