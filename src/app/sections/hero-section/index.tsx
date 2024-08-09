import {
  Button,
  Flex,
  Image,
  ScaleFade,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { scrollDown } from "@kedachallange/app/helper/scroll-down";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <Flex
      id="home"
      alignItems={{ base: "center", lg: "start" }}
      flexDir={{ base: "column", md: "column-reverse", lg: "row" }}
      w="full"
      py={{ base: "100px", lg: "150px" }}
      transition="all 1000 fade"
      gap={{ base: "0px", md: "20px" }}
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
            <Button
              size="lg"
              variant="solid"
              bg="#14BCFB"
              color="white"
              onClick={() => scrollDown("#pricing-section")}
            >
              Let&apos;s Collaborate !
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
