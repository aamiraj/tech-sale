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
      <div className="w-3/4 mx-auto my-4">
        <ul className="flex justify-center items-center gap-2 text-warning my-8">
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
          <li>My products</li>
          <li>My buyers</li>
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
