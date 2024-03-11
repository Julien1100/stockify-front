import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import LoginLayout from "./layouts/LoginLayout";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import NewProduct from "./pages/NewProduct";

// services
import { productsLoader } from "./services/productsLoader";
import { productDetailsLoader } from "./services/productLoader";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<LoginLayout />} />
      <Route element={<RootLayout />}>
        <Route index element={<Dashboard />} loader={productsLoader} />
        <Route path="products">
          <Route
            path=":id"
            element={<ProductDetails />}
            loader={productDetailsLoader}
          />
          <Route path="new" element={<NewProduct />} />
        </Route>
        <Route path="profile" element={<Profile />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
