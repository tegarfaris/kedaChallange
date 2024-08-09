import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex
      flexDir="column"
      w="full"
      minH="100vh"
      pl="70px"
      pr="80px"
      py="20px"
      alignItems="center"
    >
      <Navbar />
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default Layout;
