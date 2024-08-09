import { useRouter } from "next/router";
import { useRef } from "react";
import { useToast } from "@chakra-ui/react";

const useLogin = () => {
  const router = useRouter();
  const toast = useToast();
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

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

  return {
    emailRef,
    passwordRef,
    handleSubmit,
  };
};

export default useLogin;
