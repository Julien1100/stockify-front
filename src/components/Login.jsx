import { useState } from "react";
import axios from "axios";

import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardHeader,
  Center,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  const [email, setEmail] = useState("");
  const handleEmail = (event) => setEmail(event.target.value);

  const [password, setPassword] = useState("");
  const handlePassword = (event) => setPassword(event.target.value);

  const navigate = useNavigate();

  // TODO: Refactor to action as a service
  const handleLogin = async (event) => {
    // Login request
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/user/login`, {
        email,
        password,
      })
      .then((response) => {
        if (response.data.success) {
          const token = response.data.token;
          const userId = response.data.userId;
          localStorage.setItem("token", token);
          localStorage.setItem("userId", userId);
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Center h={"100vh"}>
      <Container>
        <Card>
          <CardHeader>
            <Heading>Login</Heading>
          </CardHeader>

          <CardBody>
            <form onSubmit={handleLogin}>
              <FormControl>
                <FormLabel>Adresse mail</FormLabel>
                <Input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Entrez votre adresse mail…"
                  mb={4}
                  isRequired
                />

                <FormLabel>Mot de passe</FormLabel>
                <InputGroup mb={4}>
                  <Input
                    value={password}
                    onChange={handlePassword}
                    pr={"4.5rem"}
                    type={show ? "text" : "password"}
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
                    Connexion
                  </Button>
                  <NavLink to="/register">
                    <Button variant={"ghost"} colorScheme="blue">
                      Créer un compte
                    </Button>
                  </NavLink>
                </ButtonGroup>
              </FormControl>
            </form>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}
