import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`header-menu ${menuOpen ? "open" : ""}`}>
        <li onClick={toggleMenu}>
          <Link to="Home" span={true} smooth={true}>
            Home
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="Programs" span={true} smooth={true}>
            Programs
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="why-us" span={true} smooth={true}>
            Why Us
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="Plan" span={true} smooth={true}>
            Plans
          </Link>
        </li>
        <li onClick={toggleMenu}>
          <Link to="Testimonials" span={true} smooth={true}>
            Testimonials
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
