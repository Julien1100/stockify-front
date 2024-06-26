import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  Show,
  Spacer,
  Text,
} from "@chakra-ui/react";

import { handleLogout } from "../services/logout";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { userLoader } from "../services/userLoader";
import ColorModeSwitch from "./ColorModeSwitch";

export default function Navbar() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userLoader();
        setUser(data);
      } catch (error) {
        console.error("Error fecting user data", error);
      }
    };
    fetchUserData();
  }, []);

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
        px={{ base: "20px", md: "40px" }}
        py={{ base: "10px", md: "20px" }}
        pt={{ base: "0", md: "20px" }}
      >
        <HStack spacing={2}>
          <Avatar
            name={`${user.firstName} ${user.lastName}`}
            bgColor={"blue.300"}
            color={"white"}
          />
          <Text fontSize={"lg"} color={"white"}>
            <Show above="md">{user.email}</Show>
          </Text>
        </HStack>
        <Spacer />
        <HStack gap={6}>
          <ColorModeSwitch />
          <Button colorScheme="blue" onClick={logout}>
            Déconnexion
          </Button>
        </HStack>
      </Flex>
    </Box>
  );
}
