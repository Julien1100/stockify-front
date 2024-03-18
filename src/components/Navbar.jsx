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
    <Box background={"blue.500"}>
      <Flex
        as={"nav"}
        justifyContent="space-between"
        alignItems={"center"}
        px={"40px"}
        py={"20px"}
      >
        <HStack spacing={2}>
          <Avatar
            name={`${user.firstName} ${user.lastName}`}
            bgColor={"blue.300"}
            color={"white"}
          />
          <Text fontSize={"lg"}>{user.email}</Text>
        </HStack>
        <Spacer />
        <Button colorScheme="blue" onClick={logout}>
          Déconnexion
        </Button>
      </Flex>
    </Box>
  );
}
