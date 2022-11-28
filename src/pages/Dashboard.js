import React, { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../contexts/UserContext";

function Dashboard() {
  const { role } = useContext(AuthContext);

  if (role === "buyer") {
    return <div>My products</div>;
  }
  if (role === "seller") {
    return (
      <div className="w-11/12 mx-auto my-4">
        <ul className="flex justify-center items-center gap-2 text-warning my-8">
          <li className="hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : undefined
              }
              to="/dashboard/seller/myproducts"
            >
              My products
            </NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : undefined
              }
              to="/dashboard/seller/addaproduct"
            >
              Add a product
            </NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : undefined
              }
              to="/dashboard/seller/mybuyers"
            >
              My buyers
            </NavLink>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    );
  }
  if (role === "admin") {
    return (
      <div className="w-11/12 mx-auto my-4">
        <ul className="flex justify-center items-center gap-2 text-warning my-8">
          <li className="hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : undefined
              }
              to="/dashboard/admin/allsellers"
            >
              All sellers
            </NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : undefined
              }
              to="/dashboard/admin/allbuyers"
            >
              All buyers
            </NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : undefined
              }
              to="/dashboard/admin/reporteditems"
            >
              Reported items
            </NavLink>
          </li>
        </ul>
        <Outlet></Outlet>
      </div>
    );
  }
}

export default Dashboard;
