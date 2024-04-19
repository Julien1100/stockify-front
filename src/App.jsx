import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

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
import UpdatePassword from "./pages/UpdatePassword";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginLayout />} />
        <Route path="/register" element={<RegisterLayout />} />
        <Route element={<RootLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="products">
            <Route path="new" element={<NewProduct />} />
            <Route path=":id" element={<ProductDetails />} />
            <Route path=":id/edit" element={<UpdateProduct />} />
          </Route>
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit/password" element={<UpdatePassword />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
