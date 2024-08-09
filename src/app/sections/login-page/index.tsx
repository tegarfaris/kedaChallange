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
} from "@chakra-ui/react";
import useLogin from "@kedachallange/app/hooks/function/useLogin";

const LoginPage: React.FC = () => {
  const { emailRef, passwordRef, handleSubmit } = useLogin();
  const headingSize = useBreakpointValue({ base: "lg", md: "xl" });

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
