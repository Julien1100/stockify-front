import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
} from "@chakra-ui/react";

import axios from "axios";
import { useState } from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export default function Register() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const data = useActionData();

  return (
    <Center h={"100vh"}>
      <Container>
        <Card>
          <CardHeader>
            <Heading>Créer un compte</Heading>
          </CardHeader>

          <CardBody>
            <Form method="post" action="/register">
              <FormControl>
                <Flex justifyContent={"space-between"} gap={4}>
                  <FormLabel>
                    Prénom
                    <Input
                      type="text"
                      name="firstName"
                      placeholder="Entrez votre prénom…"
                      mb={4}
                      isRequired
                    />
                  </FormLabel>

                  <FormLabel>
                    Nom
                    <Input
                      type="text"
                      name="lastName"
                      placeholder="Entrez votre nom…"
                      mb={4}
                      isRequired
                    />
                  </FormLabel>
                </Flex>

                <FormLabel>Rôle</FormLabel>
                <Select
                  name="role"
                  mb={4}
                  placeholder="Choisissez votre rôle…"
                  isRequired
                >
                  <option value={"user"}>Utilisateur</option>
                  <option value={"moderator"}>Modérateur</option>
                  <option value={"admin"}>Administrateur</option>
                </Select>

                <FormLabel>Adresse mail</FormLabel>
                <Input
                  type="email"
                  name="email"
                  placeholder="Entrez votre adresse mail…"
                  mb={data ? 0 : 4}
                  isRequired
                />
                {data && data.error && (
                  <FormHelperText mb={4} color={"red"}>
                    {data.error}
                  </FormHelperText>
                )}

                <FormLabel>Mot de passe</FormLabel>
                <InputGroup mb={4}>
                  <Input
                    type={show ? "text" : "password"}
                    name="password"
                    pr={"4.5rem"}
                    placeholder="Entrez votre mot de passe…"
                    isRequired
                  />
                  <InputRightElement w={"4.5rem"}>
                    <Button
                      colorScheme="blue"
                      h={"1.75rem"}
                      size="sm"
                      onClick={handleClick}
                    >
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <ButtonGroup gap={4}>
                  <Button colorScheme="blue" type="submit">
                    Enregistrer
                  </Button>
                </ButtonGroup>
              </FormControl>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}

export const registerAction = async ({ request }) => {
  const data = await request.formData();

  const submission = {
    firstName: data.get("firstName"),
    lastName: data.get("lastName"),
    email: data.get("email"),
    password: data.get("password"),
    role: data.get("role"),
  };

  try {
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/user/register`,
      submission
    );
    if (response.status === 201) {
      // Ajouter une alerte
      return redirect("/login");
    }
  } catch (error) {
    if (error.response.status === 400) {
      return { error: error.response.data };
    }
  }
  return null;
};
