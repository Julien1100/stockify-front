import { Outlet, useNavigate } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { useEffect } from "react";

export default function RootLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token") === null) {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem
          as="aside"
          colSpan={{ base: 6, md: 1, lg: 1 }}
          bg="blue.500"
          minH={{ md: "100vh" }}
          p={{ base: "10px", md: "20px" }}
        >
          <Sidebar />
        </GridItem>

        <GridItem as="main" colSpan={{ base: 6, md: 5, lg: 5 }}>
          <Navbar />
          <Outlet />
        </GridItem>
      </Grid>
    </div>
  );
}
