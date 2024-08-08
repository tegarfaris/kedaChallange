import { Button, Flex, ScaleFade, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <Flex
      w="full"
      py="150px"
      transition="all 1000 fade"
      backgroundPosition="right center"
    >
      <VStack w="full" align="left" justify="center" px={{ base: 4, md: 8 }}>
        <Stack maxW="2xl" align="flex-start" spacing={6}>
          <ScaleFade in={true} initialScale={0.9}>
            <Text fontWeight={700} lineHeight={1.2} fontSize="40px">
              Streamline your company operations with our comprehensive, secure,
              and user-friendly ERP system.
            </Text>
          </ScaleFade>

          <ScaleFade in={true} initialScale={0.9}>
            <Text
              fontWeight="normal"
              fontSize="16px"
              lineHeight="29px"
              letterSpacing="-0.01em"
              textAlign="left"
            >
              Your solution is here
            </Text>
          </ScaleFade>

          <ScaleFade in={true} initialScale={0.9}>
            <Button size="lg" colorScheme="wool-primary">
              Let&apos;s Explore Us !
            </Button>
          </ScaleFade>
        </Stack>
      </VStack>
    </Flex>
  );
};

export default HeroSection;
