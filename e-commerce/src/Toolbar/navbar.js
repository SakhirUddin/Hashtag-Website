import React from 'react';
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-links">
         <a href="/cart" className="navbar-link">
            Home
          </a>
          <a href="/cart" className="navbar-link">
            Collections
          </a>
          <a href="/products" className="navbar-link">
            Products
          </a>
          <a href="/cart" className="navbar-link">
            Pages
          </a>
          <a href="/cart" className="navbar-link">
            Features
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
