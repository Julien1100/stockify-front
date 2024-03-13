import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Container,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { useLoaderData } from "react-router-dom";

export default function ProductDetails() {
  const product = useLoaderData();

  return (
    <Container>
      <Card my={10}>
        <CardHeader>
          <Heading size={"lg"} textTransform={"capitalize"}>
            {product.name}
          </Heading>
        </CardHeader>

        <CardBody>
          <Stack divider={<StackDivider />} spacing={4}>
            <Box>
              <Heading size={"xs"} textTransform={"uppercase"}>
                Description
              </Heading>
              <Text pt={2} fontSize={"sm"}>
                {product.description}
              </Text>
            </Box>

            <HStack justifyContent={"space-between"}>
              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Quantité en stock
                </Heading>
                <Text pt={2} fontSize={"sm"}>
                  {product.quantityInStock}
                </Text>
              </Box>

              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Quantité totale
                </Heading>
                <Text pt={2} fontSize={"sm"}>
                  {product.quantityTotal}
                </Text>
              </Box>
            </HStack>

            <HStack justifyContent={"space-between"}>
              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Batteries ?
                </Heading>
                <Text pt={2} fontSize={"sm"}>
                  {product.needBattery ? "Oui" : "Non"}
                </Text>
              </Box>

              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Congelé ?
                </Heading>
                <Text pt={2} fontSize={"sm"}>
                  {product.frozen ? "Oui" : "Non"}
                </Text>
              </Box>

              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Date d'expiration ?
                </Heading>
                <Text pt={2} fontSize={"sm"}>
                  {product.hasExpirationDate ? "Oui" : "Non"}
                </Text>
              </Box>
            </HStack>

            <Box>
              <Heading size={"xs"} textTransform={"uppercase"}>
                Stockage
              </Heading>
              <Text pt={2} fontSize={"sm"}>
                {product.location ? mapLocation(product.location) : "N/A"}
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
    </Container>
  );
}

// Map pour remplacer les valeurs de location
const mapLocation = (location) => {
  switch (location) {
    case "none":
      return "N/A";
    case "shelf":
      return "Étagère";
    case "freezer":
      return "Congélateur";
    default:
      return location;
  }
};
