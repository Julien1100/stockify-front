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
} from "@chakra-ui/react";

import axios from "axios";

import { useState } from "react";

export default function NewProductCard() {
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
      // TODO: Context
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

      console.log(formData);

      // Effectuer la requête POST avec Axios
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/products/create`,
        formData,
        config
      );

      // Vérifier la réponse et afficher un message en conséquence
      console.log("Réponse du serveur :", response.data);
      alert("Produit ajouté avec succès !");
    } catch (error) {
      // Gérer les erreurs de la requête
      console.error("Erreur lors de l'ajout du produit :", error);
      alert("Une erreur est survenue lors de l'ajout du produit.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card my={10}>
        <CardHeader>
          <FormControl isRequired>
            <FormLabel>Nom du produit</FormLabel>
            <Input
              type="text"
              placeholder="Nom du produit"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </FormControl>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing={4}>
            <Box>
              <FormControl pt={2}>
                <FormLabel>Description</FormLabel>
                <Input
                  type="textarea"
                  placeholder="Description…"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </FormControl>
            </Box>

            <HStack justifyContent={"space-between"}>
              <Box>
                <FormControl isRequired>
                  <FormLabel>Quantité en stock</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    name="quantityInStock"
                    value={formData.quantityInStock}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel>Quantité totale</FormLabel>
                  <Input
                    type="number"
                    min={0}
                    name="quantityTotal"
                    value={formData.quantityTotal}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>
            </HStack>

            <HStack justifyContent={"space-between"}>
              <Box>
                <FormControl>
                  <FormLabel>Batteries ?</FormLabel>
                  <Checkbox
                    name="needBattery"
                    isChecked={formData.needBattery}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel>Congelé ?</FormLabel>
                  <Checkbox
                    name="frozen"
                    isChecked={formData.frozen}
                    onChange={handleChange}
                  />
                </FormControl>
              </Box>

              <Box>
                <FormControl>
                  <FormLabel>Date d'expiration ?</FormLabel>
                  <Checkbox
                    name="hasExpirationDate"
                    isChecked={formData.hasExpirationDate}
                    onChange={handleChange}
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
                >
                  <option value={"none"}>N/A</option>
                  <option value={"shelf"}>Étagère</option>
                  <option value={"freezer"}>Congélateur</option>
                </Select>
              </FormControl>
            </Box>
          </Stack>
        </CardBody>

        <CardFooter justifyContent={"center"}>
          <Button type="submit" colorScheme="blue">
            Enregistrer
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}
