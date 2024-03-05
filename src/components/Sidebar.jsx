import { Box, Button, Divider, Flex, Heading, Spacer } from "@chakra-ui/react";

export default function Sidebar() {
  return (
    <Box>
      <Flex direction={"column"} h={"90vh"}>
        <Heading as="h3" pb="20px" textAlign="center">
          stockify
        </Heading>
        <Divider borderColor={"cyan.50"} borderWidth={1.5} opacity="1" />
        <Spacer />
        <Divider borderColor={"cyan.50"} borderWidth={1.5} opacity="1" />
        <Flex align={"center"} justify={"center"} pt={2.5} gap={1}>
          <span>MC</span>
          <Button size={"sm"} colorScheme="blue">
            Mon compte
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
}
