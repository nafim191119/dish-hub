import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Contact from "../Pages/Contact/Contact/Contact";
import OrderFood from "../Pages/OrderFood/OrderFood/OrderFood";
import LogIn from "../Pages/LogIn/LogIn/LogIn";
import SignIn from "../Pages/SignIn/SignIn/SignIn";
import PrivateRoute from "./PrivateRoute";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Reservation from "../Pages/Dashboard/Reservation/Reservation";
import Payment from "../Pages/Dashboard/MyCart/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";


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
      },
      {
        path: 'login',
        element: <LogIn></LogIn>
      },
      {
        path: 'signup',
        element: <SignIn></SignIn>
      }
    ]
  },
  {
    path: 'dashboard',
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      {
        path: 'mycart',
        element: <MyCart></MyCart>
      },
      {
        path: 'allUsers',
        element: <AllUsers></AllUsers>
      },
      {
        path: 'userHome',
        element: <UserHome></UserHome>
      },
      {
        path: 'reservation',
        element: <Reservation></Reservation>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHis',
        element: <PaymentHistory></PaymentHistory>
      },
    ]
  }
]);