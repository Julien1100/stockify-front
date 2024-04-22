import { CheckIcon, CloseIcon } from "@chakra-ui/icons";
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
  useToast,
} from "@chakra-ui/react";

import { MdDelete, MdEdit } from "react-icons/md";

import { useNavigate, useParams } from "react-router-dom";
import { productDelete, productDetailsLoader } from "../services/productLoader";
import { jwtDecode } from "jwt-decode";
import { useEffect, useState } from "react";
import DeleteAlert from "../components/DeleteAlert";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toast = useToast();

  const tokenDecoded = jwtDecode(localStorage.getItem("token"));
  const role = tokenDecoded.userData.role;

  useEffect(() => {
    const fecthProductData = async () => {
      try {
        const data = await productDetailsLoader(id);
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };
    fecthProductData();
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleDelete = async () => {
    productDelete({ product });
    handleClose();
    navigate("/");

    toast({
      title: "Produit supprimé avec succès.",
      status: "success",
      position: "top",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleUpdate = async () => {
    navigate("edit");
  };

  return (
    <Container>
      <Card my={{ base: 4, md: 10 }} variant={"filled"}>
        <CardHeader>
          <Heading size={{ base: "md", md: "lg" }} textTransform={"capitalize"}>
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
                <Heading
                  size={"xs"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  Quantité en stock
                </Heading>
                <Text pt={2} fontSize={"sm"} textAlign={"center"}>
                  {product.quantityInStock}
                </Text>
              </Box>

              <Box>
                <Heading
                  size={"xs"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
                  Quantité totale
                </Heading>
                <Text pt={2} fontSize={"sm"} textAlign={"center"}>
                  {product.quantityTotal}
                </Text>
              </Box>
            </HStack>

            <HStack justifyContent={"space-between"} flexWrap={"wrap"} gap={4}>
              <Box>
                <Heading
                  size={"xs"}
                  textTransform={"uppercase"}
                  textAlign={"center"}
                >
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

        <CardFooter justify={"space-between"} flexWrap={"wrap"} pt={0}>
          <Button
            flex={"1"}
            variant={"ghost"}
            colorScheme="blue"
            leftIcon={<MdEdit />}
            onClick={handleUpdate}
          >
            Modifier
          </Button>
          {role !== "user" && (
            <>
              <Button
                flex={"1"}
                variant={"ghost"}
                colorScheme="red"
                leftIcon={<MdDelete />}
                onClick={handleOpen}
              >
                Supprimer
              </Button>
              <DeleteAlert
                isOpen={isOpen}
                onClose={handleClose}
                onDelete={handleDelete}
              />
            </>
          )}
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
