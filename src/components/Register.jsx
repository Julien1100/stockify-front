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

import { useState } from "react";
import { Form, NavLink, useActionData } from "react-router-dom";

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

                <FormLabel>
                  Rôle
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
                </FormLabel>

                <FormLabel>
                  Adresse mail
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
                </FormLabel>

                <FormLabel>
                  Mot de passe
                  <InputGroup mb={4}>
                    <Input
                      type={show ? "text" : "password"}
                      name="password"
                      pr={"4.5rem"}
                      mb={4}
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
                </FormLabel>

                <ButtonGroup gap={4}>
                  <Button colorScheme="blue" type="submit">
                    Enregistrer
                  </Button>
                  <NavLink to="/login">
                    <Button variant={"ghost"} colorScheme="blue">
                      Login
                    </Button>
                  </NavLink>
                </ButtonGroup>
              </FormControl>
            </Form>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}
