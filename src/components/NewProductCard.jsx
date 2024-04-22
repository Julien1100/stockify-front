import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  StackDivider,
  useToast,
} from "@chakra-ui/react";

import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewProductCard() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    quantityInStock: "0",
    quantityTotal: "0",
    needBattery: false,
    frozen: false,
    hasExpirationDate: false,
    location: "",
    __t: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Récupérer le token
      const token = localStorage.getItem("token");

      if (!token) {
        throw new Error("Token not found");
      }

      // Configurer les headers
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      // Effectuer la requête POST avec Axios
      await axios.post(
        `${import.meta.env.VITE_API_URL}/products/create`,
        formData,
        config
      );

      // Vérifier la réponse et afficher un message en conséquence
      navigate("/");
      toast({
        title: "Produit créé.",
        description: `Le produit \"${formData.name}\" a été ajouté avec succès.`,
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      // Gérer les erreurs de la requête
      console.error("Erreur lors de l'ajout du produit :", error);
      toast({
        title: "Erreur lors de l'ajout du produit.",
        status: "error",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card my={{ base: 4, md: 10 }} variant={"filled"}>
        <CardHeader pb={{ base: 0, md: 5 }}>
          <FormControl isRequired>
            <FormLabel>Nom du produit</FormLabel>
            <Input
              type="text"
              placeholder="Nom du produit"
              name="name"
              value={formData.name}
              onChange={handleChange}
              shadow={"inner"}
              background={"blackAlpha.100"}
            />
          </FormControl>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing={{ base: 3, md: 4 }}>
            <Box>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  type="textarea"
                  placeholder="Description…"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  shadow={"inner"}
                  background={"blackAlpha.100"}
                />
              </FormControl>
            </Box>

            <HStack justifyContent={"space-between"}>
              <Box>
                <FormControl isRequired>
                  <FormLabel textAlign={"center"}>Quantité en stock</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    name="quantityInStock"
                    value={formData.quantityInStock}
                    onChange={handleChange}
                    shadow={"inner"}
                    background={"blackAlpha.100"}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel textAlign={"center"}>Quantité totale</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    name="quantityTotal"
                    value={formData.quantityTotal}
                    onChange={handleChange}
                    shadow={"inner"}
                    background={"blackAlpha.100"}
                  />
                </FormControl>
              </Box>
            </HStack>

            <HStack justifyContent={"space-between"} flexWrap={"wrap"}>
              <Box>
                <FormControl textAlign={"center"}>
                  <FormLabel mx={0}>Batteries ?</FormLabel>
                  <Checkbox
                    name="needBattery"
                    isChecked={formData.needBattery}
                    onChange={handleChange}
                    shadow={"inner"}
                    background={"blackAlpha.100"}
                    borderColor={"blackAlpha.100"}
                    size={"lg"}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl textAlign={"center"}>
                  <FormLabel mx={0}>Congelé ?</FormLabel>
                  <Checkbox
                    name="frozen"
                    isChecked={formData.frozen}
                    onChange={handleChange}
                    shadow={"inner"}
                    background={"blackAlpha.100"}
                    borderColor={"blackAlpha.100"}
                    size={"lg"}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl textAlign={"center"}>
                  <FormLabel mx={0}>Date d'expiration ?</FormLabel>
                  <Checkbox
                    name="hasExpirationDate"
                    isChecked={formData.hasExpirationDate}
                    onChange={handleChange}
                    shadow={"inner"}
                    background={"blackAlpha.100"}
                    borderColor={"blackAlpha.100"}
                    size={"lg"}
                  />
                </FormControl>
              </Box>
            </HStack>

            <Box>
              <FormControl isRequired>
                <FormLabel>Stockage</FormLabel>
                <Select
                  placeholder="Lieu de stockage"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  shadow={"inner"}
                  background={"blackAlpha.100"}
                >
                  <option value={"none"}>N/A</option>
                  <option value={"shelf"}>Étagère</option>
                  <option value={"freezer"}>Congélateur</option>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </CardBody>

        <CardFooter justifyContent={"center"} gap={4}>
          <Button type="submit" colorScheme="blue">
            Enregistrer
          </Button>
          <Button onClick={() => navigate(-1)}>Annuler</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
