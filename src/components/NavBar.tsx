import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import Search from "./Search";

interface Props {
  onSearch: (search: string) => void;
}
const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack padding="15px">
      <Image src={logo} boxSize="55px" />
      <Search onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
