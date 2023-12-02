// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.jpg";
import cart from "./images/cart.png";
import "../App.css";

const Navbar = ({ onShowCart }) => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search:", selectedCategory, searchQuery);
    // Add your search logic here
  };

  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-body">
        <Link to="/" className="logo">
          <img src={logo} alt="Your Logo" height="20" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
            <li className="nav-item dropdown">
              <button
                className="btn btn-outline-success dropdown-toggle"
                type="button"
                id="categoriesDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {selectedCategory || "All Categories"}
              </button>
              <ul className="dropdown-menu" aria-labelledby="categoriesDropdown">
                <li onClick={() => handleCategoryChange("")}>
                  <a className="dropdown-item" href="/">All Categories</a>
                </li>
                {categories.map((category) => (
                  <li key={category} onClick={() => handleCategoryChange(category)}>
                    <a className="dropdown-item" href="/">{category}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>

          <form className="d-flex flex-column flex-lg-row" onSubmit={handleSearch}>
            <input
              className="form-control me-2 mb-2 mb-lg-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success me-2" type="submit">
              Search
            </button>
            <Link to="/login" className="btn btn-outline-success me-2">
              Login/SignUp
            </Link>
            <Link to="/cart" >
            <i className="btn btn-outline-success" id="cart" onClick={onShowCart}>
              <img src={cart} alt="cart" className="cart" />
            </i></Link>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
