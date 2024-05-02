import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/Logo/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import { px } from "framer-motion";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <Image src={logo} boxSize={"80px"}></Image>

      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
