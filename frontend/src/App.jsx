import { createBrowserRouter } from "react-router";
import RootLayout from "./layouts/RootLayout";
import Directory from "./pages/Directory";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Directory /> },
      { path: "wishlist", element: <Wishlist /> },
      { path: "products/:id", element: <ProductDetail /> },
    ],
  },
]);
