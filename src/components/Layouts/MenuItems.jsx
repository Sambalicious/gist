import React from "react";
import { Text } from "@chakra-ui/core";

const MenuItems = ({ children }) => {
  return (
    <div>
      <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
        {children}
      </Text>
    </div>
  );
};

export default MenuItems;
