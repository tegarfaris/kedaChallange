import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/navbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Flex flexDir="column" w="full" minH="100vh" pl="40px" pr="60px" py="20px">
      <Navbar />
      <Flex>{children}</Flex>
    </Flex>
  );
};

export default Layout;
