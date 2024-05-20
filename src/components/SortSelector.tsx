import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Box,
  Button
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (sortOrder: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
  const sortOrders = [
    { value: "", label: "Relevance" },
    { value: "-added", label: "Date Added" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release date" },
    { value: "-metacritic", label: "Popularity" },
    { value: "-rating", label: "Average Rating" }
  ];

  return (
    <>
      <Box paddingStart={2}>
        <Menu>
          <MenuButton as={Button} rightIcon={<BsChevronDown />}>
            Order by:
            {sortOrders.find((order) => order.value === sortOrder)?.label ||
              "Relevance"}
          </MenuButton>
          <MenuList padding={"3px"}>
            {sortOrders.map((order) => {
              return (
                <MenuItem
                  onClick={() => onSelectSortOrder(order.value)}
                  borderRadius={3}
                  key={order.value}
                >
                  {order.label}
                </MenuItem>
              );
            })}
          </MenuList>
        </Menu>
      </Box>
    </>
  );
};

export default SortSelector;
