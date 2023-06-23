import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelectedPlatform: (platform: Platform) => void;
  selectedPlatform: string | undefined;
}

const PlatformSelector = ({ selectedPlatform, onSelectedPlatform }: Props) => {
  const { data: platforms } = usePlatforms();
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform ? selectedPlatform : "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms.map((p) => (
          <MenuItem key={p.id} onClick={() => onSelectedPlatform(p)}>
            {p.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
