import React from "react";
import { FaBars, FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'

function NavBar() {
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
              <Link to="/home">Home</Link>
            </li>
            <li tabIndex={0}>
              <Link className="justify-between">
                Parent
                <FaAngleRight></FaAngleRight>
              </Link>
              <ul className="p-2">
                <li>
                  <Link>Submenu 1</Link>
                </li>
                <li>
                  <Link>Submenu 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link>Item 3</Link>
            </li>
          </ul>
        </div>
        <Link to='/'><img className="p-2 lg:w-1/2" src={Logo} alt="logo"></img></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li tabIndex={0}>
            <Link>
              Parent
              <FaAngleDown></FaAngleDown>
            </Link>
            <ul className="p-2">
              <li>
                <Link>Submenu 1</Link>
              </li>
              <li>
                <Link>Submenu 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link>Item 3</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-primary">Log In</Link>
      </div>
    </div>
  );
}

export default NavBar;
