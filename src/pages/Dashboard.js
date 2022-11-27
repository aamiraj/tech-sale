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
              to="/dashboard/myproducts"
            >
              My products
            </NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : undefined
              }
              to="/dashboard/addaproduct"
            >
              Add a product
            </NavLink>
          </li>
          <li className="hover:text-primary">
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-primary" : undefined
              }
              to="/dashboard/mybuyers"
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
      <div>
        <ul>
          <li>All sellers</li>
          <li>All buyers</li>
          <li>Reported items</li>
        </ul>
      </div>
    );
  }
}

export default Dashboard;
