import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Button
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <>
      <Box paddingStart={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by: Relevance
          </MenuButton>
          <MenuList padding={"3px"}>
            <MenuItem>Relevance</MenuItem>
            <MenuItem>Date added</MenuItem>
            <MenuItem>Name</MenuItem>
            <MenuItem>Release date</MenuItem>
            <MenuItem>Popularity</MenuItem>
            <MenuItem>Average rating</MenuItem>
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default SortSelector;
