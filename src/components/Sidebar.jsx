import { AtSignIcon, DragHandleIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Heading,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box>
      <Heading as="h3" pb="20px" textAlign="center" color={"white"}>
        stockify
      </Heading>
      <Divider borderColor={"cyan.50"} borderWidth={1.5} opacity="1" />

      <List py={"20px"} fontSize={"1.1em"} spacing={4}>
        <ListItem>
          <NavLink to="/">
            <Button colorScheme="blue" size={"lg"}>
              <ListIcon as={DragHandleIcon} />
              Dashboard
            </Button>
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="profile">
            <Button colorScheme="blue" size={"lg"}>
              <ListIcon as={AtSignIcon} />
              Profile
            </Button>
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
}
