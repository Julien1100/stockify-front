import {
  Box,
  Button,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { useLoaderData, useNavigate } from "react-router-dom";

function Dashboard() {
  const products = useLoaderData();
  const navigate = useNavigate();

  return (
    <Box px="40px">
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <Heading py={5}>Dashboard</Heading>
        <Button onClick={() => navigate("products/new")}>
          Nouveau produit
        </Button>
      </Flex>

      <Box>
        <TableContainer overflowY="scroll" maxH={"80vh"}>
          <Table variant={"striped"} colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Produit</Th>
                <Th isNumeric>Quantité totale</Th>
                <Th isNumeric>Quantité en stock</Th>
                <Th>Stockage</Th>
                <Th>Description</Th>
                <Th>Batteries ?</Th>
                <Th>Congelé ?</Th>
                <Th>Date d'expiration ?</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr
                  key={product._id}
                  onClick={() =>
                    navigate(`/products/${product._id.toString()}`)
                  }
                  style={{ cursor: "pointer" }}
                >
                  <Td>{product.name}</Td>
                  <Td isNumeric>{product.quantityTotal}</Td>
                  <Td isNumeric>{product.quantityInStock}</Td>
                  <Td>
                    {product.location ? mapLocation(product.location) : "N/A"}
                  </Td>
                  <Td>{product.description}</Td>
                  <Td>{product.needBattery ? "Oui" : "Non"}</Td>
                  <Td>{product.frozen ? "Oui" : "Non"}</Td>
                  <Td>{product.hasExpirationDate ? "Oui" : "Non"}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

// Map pour remplacer les valeurs de location
const mapLocation = (location) => {
  switch (location) {
    case "":
      return "N/A";
    case "shelf":
      return "Étagère";
    case "freezer":
      return "Congélateur";
    default:
      return location;
  }
};

export default Dashboard;
