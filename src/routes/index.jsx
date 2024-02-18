import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from "../pages/ProductPage";
import Container from "../layouts/Container";
import Cart from "../layouts/cart/Cart";
import { ContextRLProvider } from "../layouts/cart/context/ContextRL";
import ProtextRoute from "../features/auth/components/ProtextRoute";

const route = createBrowserRouter([
  {
    path: "/",
    element: <Container />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ProductPage />,
      },
      {
        path: "admin",
        element: (
          <>
            <ProtextRoute>
              <AdminPage />
            </ProtextRoute>
          </>
        ),
      },
      {
        path: "me",
        element: <ProfilePage />,
      },
      {
        path: "/cart",
        element: (
          <>
            <ContextRLProvider>
              <Cart />
            </ContextRLProvider>
          </>
        ),
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
