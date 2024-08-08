import { Flex } from "@chakra-ui/react";
import AboutSection from "@kedachallange/app/sections/about-section";
import HeroSection from "@kedachallange/app/sections/hero-section";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" w="full" flexGrow={1}>
      <HeroSection />
      <AboutSection />
    </Flex>
  );
};

export default Home;
