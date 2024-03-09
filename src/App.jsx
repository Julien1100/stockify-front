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
import Create from "./pages/Create";
import Profile from "./pages/Profile";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route path="login" element={<LoginLayout />} />
      <Route element={<RootLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="create" element={<Create />} />
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
