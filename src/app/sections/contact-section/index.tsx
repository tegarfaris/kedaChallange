import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  useBreakpointValue,
  VStack,
  Heading,
} from "@chakra-ui/react";

const ContactSection: React.FC = () => {
  const headingSize = useBreakpointValue({ base: "lg", md: "xl" });

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: "40px", md: 10 }}
      mt={{ base: "40px", md: "50px" }}
      mx={{ base: "0px", lg: "-100px" }}
      bg="gray.50"
    >
      <Container maxW={{ base: "container.md", md: "container.lg" }}>
        <VStack spacing={6} align="start">
          <Heading
            as="h2"
            size={headingSize}
            textAlign={{ base: "center", md: "left" }}
          >
            Contact Us
          </Heading>
          <Box w="full">
            <form>
              <VStack spacing={4} align="stretch">
                <FormControl id="name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" placeholder="Your Name" />
                </FormControl>
                <FormControl id="email" isRequired>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="Your Email" />
                </FormControl>
                <FormControl id="message" isRequired>
                  <FormLabel>Message</FormLabel>
                  <Textarea placeholder="Your Message" rows={6} />
                </FormControl>
                <Button
                  bg="#14BCFB"
                  color="white"
                  type="submit"
                  width={{ base: "full", sm: "auto" }}
                >
                  Send Message
                </Button>
              </VStack>
            </form>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactSection;
