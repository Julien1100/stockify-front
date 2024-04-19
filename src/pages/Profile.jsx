import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { userLoader } from "../services/userLoader";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

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

  const handleUpdate = async () => {
    navigate("edit/password");
  };

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

        <CardFooter justify={"center"}>
          <Button
            flex={"1"}
            variant={"ghost"}
            colorScheme="blue"
            leftIcon={<MdEdit />}
            onClick={handleUpdate}
          >
            Modifier le mot de passe
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}

const roleMap = {
  user: "Utilisateur",
  administrator: "Administrateur",
  admin: "Administrateur",
};
