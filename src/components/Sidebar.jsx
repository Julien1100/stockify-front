import { AtSignIcon, DragHandleIcon, PlusSquareIcon } from "@chakra-ui/icons";
import {
  Box,
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
      <Heading as="h3" pb="20px" textAlign="center">
        stockify
      </Heading>
      <Divider borderColor={"cyan.50"} borderWidth={1.5} opacity="1" />

      <List py={"20px"} fontSize={"1.1em"} spacing={4}>
        <ListItem>
          <NavLink to="/">
            <ListIcon as={DragHandleIcon} />
            Dashboard
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink to="profile">
            <ListIcon as={AtSignIcon} />
            Profile
          </NavLink>
        </ListItem>
      </List>
    </Box>
  );
}
