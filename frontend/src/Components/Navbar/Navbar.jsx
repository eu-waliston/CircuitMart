import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import SearchBar from "../SearchBar/SearchBar";

const Navbar = () => {
  return (
    <div className="navbar--component">
      <div className="nav--itens">
        <div className="nav-iten ">
          <img src="./images/Logo-2.png" alt="logo" className="nav-logo" />
          <Link className="nav-link home link-effect" to={"/"}>
            <h1 className="logo-h1">Circuit Mart</h1>
          </Link>
        </div>

        <div className="nav-iten menu-nav">
          <SearchBar />
          <div>
            <Link className="nav-link link-effect" to={"/headphones"}>
              headphones
            </Link>

            <Link className="nav-link link-effect" to={"/drones"}>
              drones
            </Link>

            <Link className="nav-link link-effect" to={"/cellphones"}>
              celulares
            </Link>

            <Link className="nav-link link-effect" to={"/clocks"}>
              relógios
            </Link>

            <Link className="nav-link link-effect" to={"/clocks"}>
              mouses
            </Link>

            <Link className="nav-link link-effect" to={"/clocks"}>
              teclados
            </Link>

            <Link className="nav-link link-effect" to={"/clocks"}>
              mouses pad
            </Link>

            <Link className="nav-link link-effect" to={"/clocks"}>
              monitores
            </Link>

            <Link className="nav-link link-effect" to={"/clocks"}>
              echos dot
            </Link>

            <Link className="nav-link link-effect" to={"/clocks"}>
              notebooks
            </Link>
          </div>
        </div>

        <div className="nav-iten">
          <div>
            <Link className="nav-link link-effect" to={"/cart"}>
              <AiOutlineShoppingCart className="nav-icon" />
            </Link>
          </div>
          <div>
            <Link to={"/login"} className="nav-link link-effect">
              <FaUser className="nav-icon" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
