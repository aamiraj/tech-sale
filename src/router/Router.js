import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddaProduct from "../pages/AddaProduct";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import LaptopsById from "../pages/LaptopsById";
import LogIn from "../pages/LogIn";
import MyBuyers from "../pages/MyBuyers";
import MyProducts from "../pages/MyProducts";
import Register from "../pages/Register";
import Private from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <MyProducts></MyProducts>,
          },
          {
            path: "/dashboard/myproducts",
            element: <MyProducts></MyProducts>,
          },
          {
            path: "/dashboard/addaproduct",
            element: <AddaProduct></AddaProduct>,
          },
          {
            path: "/dashboard/mybuyers",
            element: <MyBuyers></MyBuyers>,
          },
        ],
      },
      {
        path: "/categories/:id",
        element: (
          <Private>
            <LaptopsById></LaptopsById>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
    ],
  },
]);
