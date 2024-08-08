import {
  Box,
  Button,
  Flex,
  Text,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { NAVIGATION } from "@kedachallange/app/config/navigation";
import { scrollDown } from "@kedachallange/app/helper/scroll-down";

const MENU = [
  {
    id: 1,
    title: "About",
    path: "#about-section",
  },
  {
    id: 2,
    title: "Pricing",
    path: "#pricing-section",
  },
  {
    id: 3,
    title: "Contact",
    path: "#contact",
  },
];

const Navbar: FC = () => {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      position="fixed"
      top={0}
      left={0}
      width="100%"
      bg={isScrolled ? "white" : "transparent"}
      boxShadow={isScrolled ? "lg" : "none"}
      transition="background-color 0.3s, box-shadow 0.3s"
      p="10px 20px"
      zIndex={1000}
    >
      <Box pos="relative">
        <Text
          fontWeight={600}
          pos="relative"
          fontSize="18px"
          zIndex={20}
          color="white"
        >
          Home
        </Text>
        <Box w="200px" pos="absolute" top="-100px" left="-80px">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="#14BCFB"
              d="M39.9,-71.2C49.4,-63.6,53.3,-48.3,61.5,-35.2C69.7,-22,82.1,-11,82.5,0.2C82.9,11.5,71.2,22.9,61.4,33.3C51.7,43.6,43.7,52.8,33.8,61.3C23.9,69.8,11.9,77.6,0.2,77.2C-11.5,76.8,-23,68.4,-35.7,61.5C-48.4,54.6,-62.3,49.3,-70.8,39.3C-79.2,29.3,-82.2,14.7,-83.4,-0.7C-84.6,-16.1,-84,-32.1,-77.4,-45.2C-70.7,-58.3,-58,-68.3,-44.1,-73.4C-30.2,-78.5,-15.1,-78.7,0,-78.7C15.2,-78.8,30.3,-78.8,39.9,-71.2Z"
              transform="translate(100 100)"
            />
          </svg>
        </Box>
      </Box>

      {isMobile ? (
        <>
          <IconButton
            icon={<HiMenu />}
            aria-label="Open menu"
            onClick={onOpen}
            variant="outline"
            borderColor="#14BCFB"
            color="#14BCFB"
          />
          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>
                <Text fontWeight={600} color="#14BCFB">
                  Home
                </Text>
              </DrawerHeader>
              <DrawerBody>
                <Flex direction="column" gap="4">
                  {MENU.map((item) => (
                    <Button
                      key={item.id}
                      variant="ghost"
                      w="full"
                      onClick={() => {
                        scrollDown(item.path);
                        onClose();
                      }}
                    >
                      {item.title}
                    </Button>
                  ))}
                  <Button
                    variant="outline"
                    borderColor="#14BCFB"
                    color="#14BCFB"
                    w="full"
                    onClick={() => {
                      router.push(NAVIGATION.AUTH.LOGIN);
                      onClose();
                    }}
                  >
                    Login
                  </Button>
                </Flex>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </>
      ) : (
        <Flex gap="10px">
          {MENU.map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              _hover={{ bg: "#14BCFB", color: "white" }}
              onClick={() => scrollDown(item.path)}
            >
              {item.title}
            </Button>
          ))}
          <Button
            variant="outline"
            borderColor="#14BCFB"
            color="#14BCFB"
            onClick={() => router.push(NAVIGATION.AUTH.LOGIN)}
          >
            Login
          </Button>
        </Flex>
      )}
    </Flex>
  );
};

export default Navbar;
