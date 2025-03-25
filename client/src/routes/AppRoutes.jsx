import { createBrowserRouter, RouterProvider } from "react-router";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import AuthLayout from "../layouts/AuthLayout";

export default function AppRoutes() {
  const routes = [
    {
      path: "auth",
      element: <AuthLayout />,
      children: [
        {
          path: "Register",
          element: <Register />,
        },
        {
          path: "Login",
          element: <Login />,
        },
      ],
    },
  ];
  const router = createBrowserRouter(routes);
  return <RouterProvider router={router} />;
}
