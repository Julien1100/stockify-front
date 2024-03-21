import { Outlet } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function RootLayout() {
  return (
    <div>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem
          as="aside"
          colSpan="1"
          bg="blue.500"
          minH="100vh"
          p="30px"
          pt="20px"
        >
          <Sidebar />
        </GridItem>

        <GridItem as="main" colSpan="5">
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
}
