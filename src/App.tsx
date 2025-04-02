import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import { createBrowserRouter } from "react-router";
import Layout from "./components/layout/Layout";

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
    ],
  },
]);

export { router };
