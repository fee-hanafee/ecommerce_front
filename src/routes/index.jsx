import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";
import ProfilePage from "../pages/ProfilePage";
import ProductPage from "../pages/ProductPage";
import Container from "../layouts/Container";
import Cart from "../layouts/cart/Cart";

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
        path:"admin",
        element: <AdminPage/>
      },
      {
        path: "me",
        element: <ProfilePage/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
