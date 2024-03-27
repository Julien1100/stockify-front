import {
  Avatar,
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { userLoader } from "../services/userLoader";

export default function Profile() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const data = await userLoader();
        setUser(data);
      } catch (error) {
        console.error("Error fetching user data", error);
      }
    };
    fetchUserData();
  }, []);

  return (
    <Container>
      <Card my={10}>
        <CardHeader>
          <Flex flex={"1"} gap="4" alignItems={"center"}>
            <Avatar
              name={`${user.firstName} ${user.lastName}`}
              bg={"blue.500"}
              size={"lg"}
            />
            <Box>
              <Heading>
                {user.firstName} {user.lastName}
              </Heading>
              <Text>{roleMap[user.role]}</Text>
            </Box>
          </Flex>
        </CardHeader>

        <CardBody>
          <Box pb={4}>
            <Heading size={"sm"}>Email</Heading>
            <Text>{user.email}</Text>
          </Box>

          <Heading size={"sm"}>Mot de passe</Heading>
          <Text>*********</Text>
        </CardBody>
      </Card>
    </Container>
  );
}

const roleMap = {
  user: "Utilisateur",
  administrator: "Administrateur",
  admin: "Administrateur",
};
