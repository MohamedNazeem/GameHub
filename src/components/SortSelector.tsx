import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSort: (platform: string) => void;
  selectedSort: string | null;
}

const SortSelector = ({ selectedSort, onSelectedSort }: Props) => {
  const sortingOrder = [
    { label: "Relevance", value: "" },
    { label: "Date added", value: "-added" },
    { label: "Name", value: "name" },
    { label: "Release Date", value: "-released" },
    { label: "Popularity", value: "-metarcritic" },
    { label: "Average rating", value: "-rating" },
  ];

  let currentSortingOrder = sortingOrder.find(
    (order) => selectedSort === order.value
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSortingOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortingOrder.map((order) => (
          <MenuItem
            key={order.value}
            onClick={() => onSelectedSort(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
