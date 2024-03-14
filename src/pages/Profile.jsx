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
import { useLoaderData } from "react-router-dom";

export default function Profile() {
  const user = useLoaderData();

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
              <Text textTransform={"capitalize"}>{user.role}</Text>
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
