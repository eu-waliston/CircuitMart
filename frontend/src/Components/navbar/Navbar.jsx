import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="navbar--component">
      <div className="nav--itens">
        <div className="nav-iten ">
            <img src="./images/Logo.png" alt="logo" className="nav-logo"/>
          <h1 className="logo-h1">Circuit Mart</h1>
        </div>

        <div className="nav-iten menu-nav">
          <Link className="nav-link home" to={"/home"}>
            inicio
          </Link>
          <Link className="nav-link" to={"/headphones"}>
            headphones
          </Link>

          <Link className="nav-link" to={"/drones"}>
            drones
          </Link>

          <Link className="nav-link" to={"/cellphones"}>
            celulares
          </Link>

          <Link className="nav-link" to={"/clocks"}>
            relógios
          </Link>
        </div>

        <div className="nav-iten">
          <div>
            <Link className="nav-link" to={"/cart"}>
              <AiOutlineShoppingCart className="nav-icon" />
            </Link>
          </div>
          <div>
            <Link to={"/login"} className="nav-link">
              <FaUser className="nav-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
