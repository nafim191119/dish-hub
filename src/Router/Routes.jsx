import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Contact from "../Pages/Contact/Contact/Contact";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";


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
            path: 'menu',
            element: <Menu></Menu>
        },
        {
            path: 'contact',
            element: <Contact></Contact>
        },
        {
            path: 'order',
            element: <OrderFood></OrderFood>
        }
      ]
    },
  ]);