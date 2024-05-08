import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { Icon, HStack } from "@chakra-ui/react";

interface Platforms {
  platform: Platform[];
}

const PlatformIconList = ({ platform }: Platforms) => {
  const iconMap: Record<string, React.ComponentType> = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    nintendo: SiNintendo,
    ios: MdPhoneIphone,
    web: BsGlobe
  };

  return (
    <HStack>
      {platform.map((platformList) => {
        return <Icon as={iconMap[platformList.slug]} color={"gray.500"}></Icon>;
      })}
    </HStack>
  );
};

export default PlatformIconList;
