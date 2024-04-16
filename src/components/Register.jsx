import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Select,
  Card,
  Center,
  Container,
  CardHeader,
  Heading,
  CardBody,
  Flex,
  InputGroup,
  InputRightElement,
  ButtonGroup,
  Box,
  useToast,
  Image,
} from "@chakra-ui/react";
import { registerAction } from "../services/registerAction";

export default function Register() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    role: "",
    email: "",
    password: "",
  });
  const toast = useToast();

  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    try {
      const response = await registerAction(formData);
      if (response && response.error) {
        setError(response.error);
      } else {
        console.log("Registration successful!");
        toast({
          title: "Utilisateur créé avec succès !",
          status: "success",
          position: "top",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      }
    } catch (error) {
      console.error("Registration failed!", error);
    }
  };

  return (
    <>
      <Container mb={6}>
        <Image src="../../public/logo.png" alt="Logo de Stockify" />
      </Container>
      <Center>
        <Container>
          <Card>
            <CardHeader>
              <Heading>Créer un compte</Heading>
            </CardHeader>

            <CardBody>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <Flex justifyContent={"space-between"}>
                    <Box>
                      <FormLabel>Prénom</FormLabel>
                      <Input
                        type="text"
                        name="firstName"
                        placeholder="Entrez votre prénom…"
                        value={formData.firstName}
                        onChange={handleChange}
                        mb={4}
                        isRequired
                      />
                    </Box>

                    <Box>
                      <FormLabel>Nom</FormLabel>
                      <Input
                        type="text"
                        name="lastName"
                        placeholder="Entrez votre nom…"
                        value={formData.lastName}
                        onChange={handleChange}
                        mb={4}
                        isRequired
                      />
                    </Box>
                  </Flex>

                  <FormLabel>Adresse mail</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Entrez votre adresse mail…"
                    value={formData.email}
                    onChange={handleChange}
                    mb={error ? 0 : 4}
                    isRequired
                    isInvalid={error}
                    errorBorderColor="red.400"
                  />
                  {error && (
                    <FormHelperText mb={4} color={"red.400"}>
                      {error}
                    </FormHelperText>
                  )}

                  <FormLabel>Mot de passe</FormLabel>
                  <InputGroup mb={4}>
                    <Input
                      type={show ? "text" : "password"}
                      name="password"
                      placeholder="Entrez votre mot de passe…"
                      value={formData.password}
                      onChange={handleChange}
                      pr={"4.5rem"}
                      mb={4}
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

                  <ButtonGroup gap={4} colorScheme="blue">
                    <Button type="submit">Enregistrer</Button>

                    <Button variant={"ghost"}>
                      <Link to="/login">Se connecter</Link>
                    </Button>
                  </ButtonGroup>
                </FormControl>
              </form>
            </CardBody>
          </Card>
        </Container>
      </Center>
    </>
  );
}
