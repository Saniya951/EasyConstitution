// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./css_files/navbar.css"; // Import the CSS for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="">
      <img className='nav-logo' src={logo} alt='logo'/>
      <div className="navbar-brand">Citizen and Constitution</div>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/learn">Learn</Link>
        </li>
        <li>
          <Link to="/videopage">Video</Link>
        </li>
        <li>
          <Link to="/games">Game</Link>
        </li>
        <li>
          <a href="/badges">Badges</a>
        </li>
      </ul>
      <div className="navbar-buttons">
        <Link to="/login">
          <button className="login-button">Login</button>
        </Link>
        <Link to="/signup">
          <button className="register-button">Register</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
