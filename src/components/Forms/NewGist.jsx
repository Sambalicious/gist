import React, { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  useToast,
  Button,
  Textarea,
} from "@chakra-ui/core";
import { AddGist } from "../../redux/Actions/GistsActions";
import { useFirestore } from "react-redux-firebase";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const NewGist = () => {
  const firestore = useFirestore();
  const dispatch = useDispatch();
  const toast = useToast();
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [gist, setGist] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleGist = (e) => {
    setGist(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { gist, title };

    dispatch(AddGist(data, firestore, toast));
    history.push("/");
  };
  return (
    <Flex minHeight="80vh" width="full" align="center" justifyContent="center">
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
              <Input
                type="text"
                value={title}
                onChange={handleTitle}
                placeholder="Give Your gist a title"
              />
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
