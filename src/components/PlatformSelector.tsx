import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: string | undefined;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data, error } = usePlatforms();
  {
    error && <Text>{error.message}</Text>;
  }
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform : "Platforms"}
      </MenuButton>
      <MenuList>
        {data?.results?.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectedPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
