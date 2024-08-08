import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useBreakpointValue,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useRef } from "react";

const LoginPage: FC = () => {
  const router = useRouter();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const toast = useToast();
  const headingSize = useBreakpointValue({ base: "lg", md: "xl" });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;

    if (email === "admin@gmail" && password === "admin123") {
      toast({
        title: "Login successful.",
        description: "You've logged in successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
      router.push("/");
    } else {
      toast({
        title: "Login failed.",
        description: "Invalid email or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="100vh"
      bg="gray.100"
    >
      <Container maxW="md" bg="white" p={8} borderRadius="md" boxShadow="md">
        <Heading as="h1" size={headingSize} mb={6} textAlign="center">
          Login
        </Heading>
        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                placeholder="Enter your email"
                ref={emailRef}
              />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter your password"
                ref={passwordRef}
              />
            </FormControl>
            <Button bg="#14BCFB" color="white" type="submit" width="full">
              Login
            </Button>
          </Stack>
        </form>
      </Container>
    </Box>
  );
};

export default LoginPage;
