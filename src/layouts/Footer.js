import React from "react";
import { Link } from "react-router-dom";
import Logo from '../assets/logo.png'
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer className="footer p-10 bg-secondary text-base-content">
        <div>
          <span className="footer-title">Services</span>
          <Link className="link hover:text-warning">Branding</Link>
          <Link className="link hover:text-warning">Design</Link>
          <Link className="link hover:text-warning">Marketing</Link>
          <Link className="link hover:text-warning">Advertisement</Link>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <Link className="link hover:text-warning">About us</Link>
          <Link className="link hover:text-warning">Contact</Link>
          <Link className="link hover:text-warning">Jobs</Link>
          <Link className="link hover:text-warning">Press kit</Link>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <Link className="link hover:text-warning">Terms of use</Link>
          <Link className="link hover:text-warning">Privacy policy</Link>
          <Link className="link hover:text-warning">Cookie policy</Link>
        </div>
      </footer>
      <footer className="footer px-10 py-4 border-t bg-accent text-base-content border-base-300">
        <div className="items-center grid-flow-col">
        <img className="w-4/5 md:w-full" src={Logo} alt="logo"/>
          <p>
            Tech Sale <br />
            Providing reliable products and services since 2022.
          </p>
        </div>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            <Link className="hover:text-warning">
              <FaFacebook></FaFacebook>
            </Link>
            <Link className="hover:text-warning">
              <FaTwitter></FaTwitter>
            </Link>
            <Link className="hover:text-warning">
              <FaYoutube></FaYoutube>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
