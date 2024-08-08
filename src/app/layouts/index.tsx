import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex flexDir="column" w="full" minH="100vh" px="40px" py="20px">
      <Navbar />
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default Layout;
