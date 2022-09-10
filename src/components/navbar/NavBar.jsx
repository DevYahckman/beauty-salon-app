import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSwatchbook, FaFacebook, FaTwitter } from "react-icons/fa";
import { BsInfo, BsPaletteFill } from "react-icons/bs";
import { MdOutlineBookOnline, MdModelTraining } from "react-icons/md";

class NavBar extends Component {
  state = {};
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark  fixed-top  ">
        <a class="navbar-brand" to="/" style={{ color: "white" }}>
          Infinity
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav ml-auto">
            <NavLink className="nav-item nav-link" to="/">
              {" "}
              <span>
                <FaHome />
              </span>{" "}
              Home
            </NavLink>
            <NavLink className="nav-item nav-link" to="/about">
              {" "}
              <span>
                {" "}
                <BsInfo />{" "}
              </span>{" "}
              About
            </NavLink>
            <NavLink className="nav-item nav-link" to="/book">
              {" "}
              <span>
                <MdOutlineBookOnline />
              </span>{" "}
              Book Online
            </NavLink>
            <NavLink className="nav-item nav-link" to="/academy">
              {" "}
              <span>
                {" "}
                <MdModelTraining />
              </span>{" "}
              Academy
            </NavLink>
            <NavLink className="nav-item nav-link" to="/contact">
              {" "}
              <span>
                {" "}
                <FaSwatchbook />
              </span>{" "}
              Contact us
            </NavLink>
            <NavLink className="nav-item nav-link" to="/">
              <FaFacebook />
            </NavLink>
            <NavLink className="nav-item nav-link" to="/">
              <FaTwitter />
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
