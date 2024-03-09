import { useState } from "react";
import axios from "axios";

import {
  Button,
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
import { useNavigate } from "react-router-dom";

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
          localStorage.setItem("token", token);
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
                />

                <FormLabel>Mot de passe</FormLabel>
                <InputGroup mb={4}>
                  <Input
                    value={password}
                    onChange={handlePassword}
                    pr={"4.5rem"}
                    type={show ? "text" : "password"}
                    placeholder="Entrez votre mot de passe…"
                  />
                  <InputRightElement w={"4.5rem"}>
                    <Button h={"1.75rem"} size="sm" onClick={handleClick}>
                      {show ? "Hide" : "Show"}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Button type="submit">Connexion</Button>
              </FormControl>
            </form>
          </CardBody>
        </Card>
      </Container>
    </Center>
  );
}
