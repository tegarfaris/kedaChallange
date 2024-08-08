import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

const TitleHeading: React.FC<{ title: string }> = ({ title }) => {
  return (
    <Flex flexDir="column" alignItems="center">
      <Text fontSize="35px" textAlign="center" fontWeight="700">
        {title}
      </Text>
      <Divider
        w="full"
        px="20px"
        border="5px solid"
        rounded="full"
        borderColor="#14BCFB"
      />
    </Flex>
  );
};

export default TitleHeading;
