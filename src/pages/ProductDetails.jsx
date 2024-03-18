import { CheckIcon, CloseIcon, Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";

import { MdDelete, MdEdit } from "react-icons/md";

import { useLoaderData, useNavigate } from "react-router-dom";
import { productDelete } from "../services/productLoader";

export default function ProductDetails() {
  const product = useLoaderData();
  const navigate = useNavigate();

  const handleDelete = async () => {
    productDelete({ product });
    navigate("/");
  };

  const handleUpdate = async () => {
    navigate("edit");
  };

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
                <Text pt={2} fontSize={"sm"} textAlign={"center"}>
                  {product.quantityInStock}
                </Text>
              </Box>

              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Quantité totale
                </Heading>
                <Text pt={2} fontSize={"sm"} textAlign={"center"}>
                  {product.quantityTotal}
                </Text>
              </Box>
            </HStack>

            <HStack justifyContent={"space-between"}>
              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Batteries ?
                </Heading>
                <Text pt={2} fontSize={"sm"} textAlign={"center"}>
                  {product.needBattery ? (
                    <CheckIcon color={"green"} />
                  ) : (
                    <CloseIcon color={"red"} />
                  )}
                </Text>
              </Box>

              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Congelé ?
                </Heading>
                <Text pt={2} fontSize={"sm"} textAlign={"center"}>
                  {product.frozen ? (
                    <CheckIcon color={"green"} />
                  ) : (
                    <CloseIcon color={"red"} />
                  )}
                </Text>
              </Box>

              <Box>
                <Heading size={"xs"} textTransform={"uppercase"}>
                  Date d'expiration ?
                </Heading>
                <Text pt={2} fontSize={"sm"} textAlign={"center"}>
                  {product.hasExpirationDate ? (
                    <CheckIcon color={"green"} />
                  ) : (
                    <CloseIcon color={"red"} />
                  )}
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

        <CardFooter justify={"space-between"} flexWrap={"wrap"}>
          <Button
            flex={"1"}
            variant={"ghost"}
            colorScheme="blue"
            leftIcon={<MdEdit />}
            onClick={handleUpdate}
          >
            Modifier
          </Button>
          <Button
            flex={"1"}
            variant={"ghost"}
            colorScheme="red"
            leftIcon={<MdDelete />}
            onClick={handleDelete}
          >
            Supprimer
          </Button>
        </CardFooter>
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
