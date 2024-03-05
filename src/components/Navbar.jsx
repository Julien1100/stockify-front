import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Flex bg="blue.500" justifyContent="space-between">
      <Box pl="40px" py="20px">
        <Heading as="h3">Navbar</Heading>
      </Box>
    </Flex>
  );
}
