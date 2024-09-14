import React, { useState } from 'react';
import './Navbar.css';
import { Logo } from '../../assets/Images/Index';
import { FaArrowRightToBracket } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
        <>
      <nav className="navbar navbar-expand-md navbar-light">
        <div className="container">
          <a className="navbar-brand col-md-3 col-sm-3 ms-1" href="#">
            <img src={Logo} alt="Logo" className="responsive-logo img-fluid d-flex flex justify col-md-12 col-sm-12" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav  mb-2 mb-lg-0 alignment" style={{fontFamily:'General Sans'}}>
              <li className="nav-item">
                <a className="nav-link active" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">How it Works</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Phases</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About Us</a>
              </li>
            </ul>
            <button className="btn alignment ms-4" id='apply'>
              Apply Now <FaArrowRightToBracket className="ms-2" />
            </button>
          </div>
        </div>
      </nav>
     
      {isMenuOpen && <div className="navbar-overlay" onClick={handleToggle}></div>}
    </>
  );
};

export default Navbar;
