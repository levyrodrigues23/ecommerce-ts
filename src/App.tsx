import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";
import Product from "./pages/product/Product";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:id",
        element: <Product/>
      }
    ],
  },
]);

export { router };
