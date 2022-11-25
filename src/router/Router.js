import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import LaptopsById from "../pages/LaptopsById";
import LogIn from "../pages/LogIn";
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
        path: '/login',
        element:<LogIn></LogIn>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: "/categories/:id",
        element: <Private><LaptopsById></LaptopsById></Private>,
        loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ],
  },
]);
