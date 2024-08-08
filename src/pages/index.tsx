import { Flex } from "@chakra-ui/react";
import AboutSection from "@kedachallange/app/sections/about-section";
import ContactSection from "@kedachallange/app/sections/contact-section";
import HeroSection from "@kedachallange/app/sections/hero-section";
import PricingSection from "@kedachallange/app/sections/pricing-section";
import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" w="full" flexGrow={1}>
      <HeroSection />
      <AboutSection />
      <PricingSection />
      <ContactSection />
    </Flex>
  );
};

export default Home;
