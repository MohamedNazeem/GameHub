import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const configTheme: ThemeConfig = {
  initialColorMode: "dark",
};

const theme = extendTheme({ configTheme });

export default theme;
