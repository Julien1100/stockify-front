import { useEffect, useState } from "react";
import { passwordUpdate, userLoader } from "../services/userLoader";
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
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function UpdatePassword() {
  const [user, setUser] = useState({});
  const [password, setPassword] = useState({
    password: "",
    confirmedPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const navigate = useNavigate();

  const roleMap = {
    user: "Utilisateur",
    administrator: "Administrateur",
    admin: "Administrateur",
  };

  useEffect(() => {
    const fecthUserData = async () => {
      try {
        const data = await userLoader();
        setUser(data);
      } catch (error) {
        console.error("Error fectching product data", error);
      }
    };
    fecthUserData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.password === password.confirmedPassword) {
      passwordUpdate(password);
      alert("C'est ok");
      navigate(-1);
    } else {
      alert("Vérifiez votre mot de passe");
    }
  };

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowPasswordConfirm = () =>
    setShowPasswordConfirm(!showPasswordConfirm);

  return (
    <Container>
      <form onSubmit={handleSubmit}>
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
            <FormControl isRequired pb={4}>
              <FormLabel>Nouveau mot de passe</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? "text" : "password"}
                  value={password.password}
                  onChange={(e) =>
                    setPassword({ ...password, password: e.target.value })
                  }
                />
                <InputRightElement w={"4.5rem"}>
                  <Button
                    colorScheme="blue"
                    h={"1.75rem"}
                    size={"sm"}
                    onClick={handleShowPassword}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <FormLabel>Confirmer le mot de passe</FormLabel>
              <InputGroup>
                <Input
                  type={showPasswordConfirm ? "text" : "password"}
                  value={password.confirmedPassword}
                  onChange={(e) =>
                    setPassword({
                      ...password,
                      confirmedPassword: e.target.value,
                    })
                  }
                />
                <InputRightElement w={"4.5rem"}>
                  <Button
                    colorScheme="blue"
                    h={"1.75rem"}
                    size={"sm"}
                    onClick={handleShowPasswordConfirm}
                  >
                    {showPasswordConfirm ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </CardBody>

          <CardFooter justifyContent={"center"} gap={4}>
            <Button type="submit" colorScheme="blue">
              Enregistrer
            </Button>
            <Button onClick={() => navigate(-1)}>Annuler</Button>
          </CardFooter>
        </Card>
      </form>
    </Container>
  );
}
