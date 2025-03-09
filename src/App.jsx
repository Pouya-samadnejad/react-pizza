import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./ui/Home";
import Error from "./ui/Error";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as orderCreation,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import { action as updateOrderAction } from "./features/order/UpdateOrder";
export default function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      errorElement: <Error />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/menu", element: <Menu />, loader: menuLoader },
        { path: "/cart", element: <Cart /> },
        { path: "/order/new", element: <CreateOrder />, action: orderCreation },
        {
          path: "/order/:orderId",
          element: <Order />,
          loader: orderLoader,
          errorElement: <Error />,
          action: updateOrderAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
