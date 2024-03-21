import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";
import LoginLayout from "./layouts/LoginLayout";
import RegisterLayout from "./layouts/RegisterLayout";

// pages
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import ProductDetails from "./pages/ProductDetails";
import NewProduct from "./pages/NewProduct";
import UpdateProduct from "./pages/UpdateProduct";

// services
import { productsLoader } from "./services/productsLoader";
import { productDetailsLoader } from "./services/productLoader";
import { userLoader } from "./services/userLoader";
import { registerAction } from "./services/registerAction";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<LoginLayout />} />
      <Route
        path="register"
        element={<RegisterLayout />}
        action={registerAction}
      />
      <Route element={<RootLayout />} loader={userLoader}>
        <Route index element={<Dashboard />} loader={productsLoader} />
        <Route path="products">
          <Route
            path=":id"
            element={<ProductDetails />}
            loader={productDetailsLoader}
          />
          <Route path="new" element={<NewProduct />} />
          <Route
            path=":id/edit"
            element={<UpdateProduct />}
            loader={productDetailsLoader}
          />
        </Route>
        <Route path="profile" element={<Profile />} loader={userLoader} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
    //   <Router>
    //     <Routes>
    //       <Route path="/" element={<RootLayout />} loader={userLoader}>
    //         <Route path="login" element={<LoginLayout />} />
    //         <Route
    //           path="register"
    //           element={<RegisterLayout />}
    //           action={registerAction}
    //         />
    //         <Route path="profile" element={<Profile />} />
    //         <Route index element={<Dashboard />} loader={productsLoader} />
    //         <Route path="products/new" element={<NewProduct />} />
    //         <Route
    //           path="products/:id"
    //           element={<ProductDetails />}
    //           loader={productDetailsLoader}
    //         />
    //         <Route
    //           path="products/:id/edit"
    //           element={<UpdateProduct />}
    //           loader={productDetailsLoader}
    //         />
    //       </Route>
    //     </Routes>
    //   </Router>
  );
}

export default App;
