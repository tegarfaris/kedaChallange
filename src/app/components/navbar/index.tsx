import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { title } from "process";
import React from "react";

const MENU = [
  {
    id: 1,
    title: "About",
    path: "#about",
  },
  {
    id: 2,
    title: "Pricing",
    path: "#pricing",
  },
  {
    id: 3,
    title: "Contact",
    path: "#contact",
  },
];

const Navbar: React.FC = () => {
  return (
    <Flex justifyContent="space-between">
      <Box>
        <Text fontWeight={600}>Home</Text>
      </Box>

      <Flex gap="10px">
        {MENU.map((item) => (
          <Button
            key={item.id}
            variant="ghost"
            _hover={{ bg: "#14BCFB", color: "white" }}
          >
            {item.title}
          </Button>
        ))}
        <Button variant="outline" borderColor="#14BCFB" color="#14BCFB">
          Login
        </Button>
      </Flex>
    </Flex>
  );
};

export default Navbar;
