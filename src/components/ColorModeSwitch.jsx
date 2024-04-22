import { HStack, Hide, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack color={"white"}>
      <Hide below="md">
        <MdLightMode />
        <Switch
          size={"lg"}
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        />
        <MdDarkMode />
      </Hide>
    </HStack>
  );
}
