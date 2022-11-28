import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import AddaProduct from "../pages/AddaProduct";
import AllBuyers from "../pages/AllBuyers";
import AllSellers from "../pages/AllSellers";
import AllUsers from "../pages/AllUsers";
import Blog from "../pages/Blog";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
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
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/dashboard/seller",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard/seller",
            element: <MyProducts></MyProducts>,
          },
          {
            path: "/dashboard/seller/myproducts",
            element: <MyProducts></MyProducts>,
          },
          {
            path: "/dashboard/seller/addaproduct",
            element: <AddaProduct></AddaProduct>,
          },
          {
            path: "/dashboard/seller/mybuyers",
            element: <MyBuyers></MyBuyers>,
          },
        ],
      },
      {
        path: "/dashboard/admin",
        element: <Dashboard></Dashboard>,
        loader: () => fetch("http://localhost:5000/users"),
        children: [
          {
            path: "/dashboard/admin",
            element: <AllUsers></AllUsers>,
            loader: () => fetch("https://tech-sale-server.vercel.app/users"),
          },
          {
            path: "/dashboard/admin/allsellers",
            element: <AllSellers></AllSellers>,
          },
          {
            path: "/dashboard/admin/allbuyers",
            element: <AllBuyers></AllBuyers>,
          },
          {
            path: "/dashboard/admin/reporteditems",
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
      {
        path: "/blog",
        element: <Blog></Blog>
      }
    ],
  },
]);
