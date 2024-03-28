import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export default function ColorModeSwitch() {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack color={"white"}>
      <MdLightMode />
      <Switch
        size={"lg"}
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <MdDarkMode />
    </HStack>
  );
}
