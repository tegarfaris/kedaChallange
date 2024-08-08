import {
  Button,
  Flex,
  Image,
  ScaleFade,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
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
            <Button size="lg" variant="solid" bg="#14BCFB" color="white">
              Let&apos;s Explore Us !
            </Button>
          </ScaleFade>
        </Stack>
      </VStack>

      <Image
        src="/assets/hero-illustration.svg"
        w="500px"
        h="350px"
        alt="asset-hero"
      />
    </Flex>
  );
};

export default HeroSection;
