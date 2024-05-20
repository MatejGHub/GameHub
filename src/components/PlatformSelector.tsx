import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms, { Platform } from "../hooks/usePlatforms";

interface Props {
  onSelectPlatform: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) {
    return null;
  }
  return (
    <>
      <Box paddingStart={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            {selectedPlatform?.name || "Platforms"}
          </MenuButton>
          <MenuList padding={"3px"}>
            {data.map((platform) => {
              return (
                <MenuItem
                  borderRadius={3}
                  onClick={() => {
                    onSelectPlatform(platform);
                  }}
                  key={platform.id}
                >
                  {platform.name}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default PlatformSelector;
