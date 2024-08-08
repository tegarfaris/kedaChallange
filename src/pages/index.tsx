import { Flex } from "@chakra-ui/react";
import HeroSection from "@kedachallange/app/sections/hero-section";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" w="full" flexGrow={1}>
      <HeroSection />
    </Flex>
  );
};

export default Home;
