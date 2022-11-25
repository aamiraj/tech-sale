import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home";
import LaptopsById from "../pages/LaptopsById";

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
        path: "/categories/:id",
        element: <LaptopsById></LaptopsById>,
        loader: ({params})=>fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ],
  },
]);
