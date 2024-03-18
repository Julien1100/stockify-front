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
} from "@chakra-ui/react";
import { useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { productUpdate } from "../services/productLoader";

export default function UpdateProduct() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [product, setProduct] = useState(useLoaderData());

  const handleSubmit = (e) => {
    e.preventDefault();
    productUpdate({ product }, id);
    navigate("/");
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Card my={10}>
          <CardHeader>
            <FormControl isRequired>
              <FormLabel>Nom du produit</FormLabel>
              <Input
                type="text"
                value={product.name}
                onChange={(e) =>
                  setProduct({ ...product, name: e.target.value })
                }
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
                    value={product.description}
                    onChange={(e) =>
                      setProduct({ ...product, description: e.target.value })
                    }
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
                      value={product.quantityInStock}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          quantityInStock: e.target.value,
                        });
                      }}
                    />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel>Quantité totale</FormLabel>
                    <Input
                      type="number"
                      min={0}
                      value={product.quantityTotal}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          quantityTotal: e.target.value,
                        });
                      }}
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
                      isChecked={product.needBattery}
                      value={product.needBattery}
                      onChange={(e) => {
                        setProduct({
                          ...product,
                          needBattery: e.target.checked,
                        });
                      }}
                    />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel>Congelé ?</FormLabel>
                    <Checkbox
                      name="frozen"
                      isChecked={product.frozen}
                      value={product.frozen}
                      onChange={(e) => {
                        setProduct({ ...product, frozen: e.target.checked });
                      }}
                    />
                  </FormControl>
                </Box>

                <Box>
                  <FormControl>
                    <FormLabel>Date d'expiration ?</FormLabel>
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
    </Container>
  );
}