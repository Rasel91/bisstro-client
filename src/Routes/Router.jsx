import {
  createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import OrderFood from "../pages/Order/OrderFood";
import Menu from "../pages/Shared/Menu/Menu";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <Menu></Menu>
      },
      {
        path: '/order/:category',
        element: <OrderFood></OrderFood>
      },

    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  }
]);