import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import { AuthContext } from "../contexts/UserContext";
import { FaUserAlt } from "react-icons/fa";

function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/home");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-accent shadow-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <FaBars></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-500" : undefined
                }
                to="/home"
              >
                Home
              </NavLink>
            </li>
            <li tabIndex={0}>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-amber-500" : undefined
                  }
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              )}
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-500" : undefined
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="p-2 lg:w-1/2" src={Logo} alt="logo"></img>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-amber-500" : undefined
              }
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li tabIndex={0}>
            {user && (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-amber-500" : undefined
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            )}
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "text-amber-500" : undefined
              }
              to="/blog"
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid ? (
          <div
            className="flex justify-center items-center tooltip tooltip-left"
            data-tip={user?.email}
          >
            {user?.photoURL ? (
              <img
                className="w-8 h-8 rounded-full mx-4"
                src={user?.photoURL}
                alt="profile-pic"
              />
            ) : (
              <FaUserAlt className="w-8 h-8 rounded-full mx-4" />
            )}
            <button onClick={handleLogOut} className="btn btn-outline">
              Log Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
}

export default NavBar;
