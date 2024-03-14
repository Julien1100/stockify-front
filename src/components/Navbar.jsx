import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { handleLogout } from "../services/logout";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function Navbar() {
  const user = useLoaderData();

  const navigate = useNavigate();

  const logout = () => {
    handleLogout(navigate);
  };

  return (
    <Box>
      <Flex
        as={"nav"}
        justifyContent="space-between"
        alignItems={"center"}
        px={"40px"}
        py={"20px"}
        borderBottom={"1.5px solid white"}
      >
        <Heading as="h3">Navbar</Heading>
        <Spacer />

        <HStack spacing={2}>
          <Avatar name={`${user.firstName} ${user.lastName}`} bg={"blue.500"} />
          <Text>{user.email}</Text>
          <Button colorScheme="blue" onClick={logout}>
            Déconnexion
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
