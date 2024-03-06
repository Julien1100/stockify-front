import {
  Box,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

function Dashboard() {
  return (
    <Box px="40px">
      <Heading py={5}>Dashboard</Heading>

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
              {/* Repeat with .map */}
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>

              {/* DUMMY CONTENT */}

              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
              <Tr>
                <Td>Croissant au beurre</Td>
                <Td isNumeric>100</Td>
                <Td isNumeric>50</Td>
                <Td>Étagère</Td>
                <Td>Délicieux croissants au beurre frais.</Td>
                <Td></Td>
                <Td>Non</Td>
                <Td>Oui</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Dashboard;
