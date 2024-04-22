import { AtSignIcon, DragHandleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  Hide,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box>
      <Heading
        as="h3"
        pb={{ base: "10px", md: "20px" }}
        textAlign="center"
        color={"white"}
      >
        stockify
      </Heading>

      <List
        fontSize={"1.1em"}
        spacing={{ md: 2 }}
        gap={{ base: 4, md: 0 }}
        pb={"10px"}
        display={"flex"}
        flexDir={{ base: "row", md: "column" }}
        justifyContent={"center"}
      >
        <ListItem>
          <NavLink to="/">
            <Button colorScheme="blue" size={"lg"}>
              <Hide below="md">
                <ListIcon as={DragHandleIcon} />
              </Hide>
              Dashboard
            </Button>
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="profile">
            <Button colorScheme="blue" size={"lg"}>
              <Hide below="md">
                <ListIcon as={AtSignIcon} />
              </Hide>
              Profile
            </Button>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
}
