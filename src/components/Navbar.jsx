import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Box>
      <Flex
        as={"nav"}
        justifyContent="space-between"
        alignItems={"center"}
        px={"40px"}
        py={"20px"}
        borderBottom={"1.5px solid white"}
      >
        <Heading as="h3">Navbar</Heading>
        <Spacer />

        <HStack spacing={2}>
          <Avatar name="Julien Milcent" bg={"blue.500"} />
          <Text>jul.milcent@gmail.com</Text>
          <Button colorScheme="blue">Déconnexion</Button>
        </HStack>
      </Flex>
    </Box>
  );
}
