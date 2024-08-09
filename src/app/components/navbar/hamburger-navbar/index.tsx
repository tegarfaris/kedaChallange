import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
} from "@chakra-ui/react";
import { NAVIGATION } from "@kedachallange/app/config/navigation";
import { scrollDown } from "@kedachallange/app/helper/scroll-down";
import React from "react";
import { HiMenu } from "react-icons/hi";
import { MENU } from "..";
import { useRouter } from "next/router";

interface HamburgerNavbarProps {
  onOpen: () => void;
  isOpen: boolean;
  onClose: () => void;
}
const HamburgerNavbar: React.FC<HamburgerNavbarProps> = ({
  onClose,
  onOpen,
  isOpen,
}) => {
  const router = useRouter();

  return (
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
            <Text
              fontWeight={600}
              color="#14BCFB"
              onClick={() => scrollDown("#home")}
            >
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
  );
};

export default HamburgerNavbar;
