import { HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <>
      <HStack justify={"space-between"} px={5}>
        <Image src={Logo} boxSize={"60px"} />
        <ColorModeSwitch />
      </HStack>
    </>
  );
};

export default NavBar;
