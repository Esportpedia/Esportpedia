import React from "react";
import { NavLink, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
              Captain Side
            </Link>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/about" className="nav-link ">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className="nav-link">
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/testing" className="nav-link">
                  Testing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/nft" className="nav-link">
                  NFT
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Login 
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;