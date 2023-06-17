import React, { useState } from "react";
import DAGLOGO from '../../images/DAGLOGO.png';
import { FaBars, FaChevronDown } from "react-icons/fa";
import '../../App.css';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to ="/"className="navbar-logo"><img src={DAGLOGO} alt="" height={68} width={80} padding={10} />
        </Link>
          <div>
          <h4><strong> Direct Admission Global</strong> </h4>
          </div>
    
        <src />
        <div className={`menu-icon ${isOpen ? "active" : "Sideview"}`} onClick={toggleMenu}>
          <FaBars />
        </div>
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}   >
          <li className="nav-item">
            <Link to="/" className="nav-link">
              <strong>Home</strong>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
              <strong> About</strong> <FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/about" className="dropdown-link">
                  <strong> About US</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/StudyIndia" className="dropdown-link">
                  <strong>Study India</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/StudyAbroad" className="dropdown-link">
                  <strong>Study Abroad</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Testimonials" className="dropdown-link">
                  <strong>Testimonials</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Gallery" className="dropdown-link">
                  <strong>Gallery</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
              <strong>Services</strong> <FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/MbaConsultants" className="dropdown-link">
                  <strong>MBA Consultants</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/SOP" className="dropdown-link">
                  <strong>SOP/LOR</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Mock" className="dropdown-link">
                  <strong>Mock</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/AWT" className="dropdown-link">
                  <strong>AWT</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Scolarship" className="dropdown-link">
                  <strong>Scolarship</strong>
                </Link>
              </li>
            </ul>
          </li>
          <li className="nav-item dropdown">
            <span className="nav-link dropdown-toggle" onClick={toggleMenu}>
              <strong>Reach US</strong><FaChevronDown />
            </span>
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to="/Book" className="dropdown-link">
                  <strong>Book An Appointment</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Payment" className="dropdown-link">
                  <strong>Payment</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Hiring" className="dropdown-link">
                  <strong>Career</strong>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link to="/Blog" className="dropdown-link">
                  <strong>Blog</strong>
                </Link>
              </li>

            </ul>
          </li>
          <li className="nav-item">
            <button className="NavBtn">
              <Link to="/Register" className="nav-link">
                <strong>Register</strong>
              </Link></button>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;