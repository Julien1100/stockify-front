import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Select,
  Stack,
  StackDivider,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productDetailsLoader, productUpdate } from "../services/productLoader";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const toast = useToast();

  useEffect(() => {
    const fecthProductData = async () => {
      try {
        const data = await productDetailsLoader(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fectching product data", error);
      }
    };
    fecthProductData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    productUpdate({ product }, id);
    navigate(-1);
    toast({
      title: "Produit modifié avec succès.",
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Card my={{ base: 4, md: 10 }} variant={"filled"}>
          <CardHeader pb={{ base: 0, md: 5 }}>
            <FormControl isRequired>
              <FormLabel>Nom du produit</FormLabel>
              <Input
                type="text"
                value={product.name || ""}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
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
                    value={product.description || ""}
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
                    shadow={"inner"}
                    background={"blackAlpha.100"}
                  />
                </FormControl>
              </Box>

              <HStack justifyContent={"space-between"} flexWrap={"no-wrap"}>
                <Box>
                  <FormControl isRequired>
                    <FormLabel textAlign={"center"}>
                      Quantité en stock
                    </FormLabel>
                    <Input
                      type="number"
                      min={0}
                      value={product.quantityInStock || 0}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          quantityInStock: e.target.value,
                        });
                      }}
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
                      value={product.quantityTotal || 0}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          quantityTotal: e.target.value,
                        });
                      }}
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
                      isChecked={product.needBattery}
                      value={product.needBattery}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          needBattery: e.target.checked,
                        });
                      }}
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
                      isChecked={product.frozen}
                      value={product.frozen}
                      onChange={(e) => {
                        setProduct({ ...product, frozen: e.target.checked });
                      }}
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
                      isChecked={product.hasExpirationDate}
                      value={product.hasExpirationDate}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          hasExpirationDate: e.target.checked,
                        });
                      }}
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
                    name="location"
                    value={product.location}
                    onChange={(e) => {
                      setProduct({ ...product, location: e.target.value });
                    }}
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
    </Container>
  );
}
