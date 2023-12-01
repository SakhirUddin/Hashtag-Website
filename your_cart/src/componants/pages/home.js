// src/components/HomePage.js

import React, { useState, useEffect } from "react";
import Navbar from "../Navbar";
import ProductCard from "../ProductCard";
import banner1 from "../images/logo2.png";
import banner2 from "../images/logo2.png";
import banner3 from "../images/logo2.png";
// import footerLogo from "../images/logo.jpg";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    // Fetch data from the Fake Store API
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Apply filtering based on the selected category
    if (selectedCategory === "All") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Adjust filter options based on Fake Store API categories
  const categories = [
    "All",
    "electronics",
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar
        onShowCart={() => {}}
        categories={categories}
        selectedCategory={selectedCategory}
        onSelectCategory={handleCategoryChange}
      />

      {/*carousel  */}
      {/* // Update your carousel code to make images responsive */}
<div id="carouselExampleSlidesOnly" className="carousel slide " data-bs-ride="carousel" data-bs-interval="2500">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={banner1} className="d-block w-100" alt="Banner 1" />
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" alt="Banner 2" />
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" alt="Banner 3" />
    </div>
  </div>
</div>


      {/* Filter Bar */}
      <div className="filterbar">
      <div className="container">
  <div className="mb-1 text-center">
    {/* Filter icon */}
    <i className="fas fa-filter mr-2"></i>
    {/* Filter buttons */}
    {categories.map((category) => (
      <button
        key={category}
        type="button"
        className={`btn btn-outline-primary mx-2 mb-2 ${
          selectedCategory === category ? "active" : ""
        }`}
        onClick={() => handleCategoryChange(category)}
      >
        {category}
      </button>
    ))}
  </div>
</div></div>

      {/* Featured Products Section */}
      <div className="container mt-5">
        <h2>Featured Products</h2>

        {/* Product cards */}
        <div className="row">
          {filteredProducts.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      
      <footer className="bg-dark text-center text-white">
  <div className="container p-4">
    <section className="mb-4">
     
    </section>
  </div>
  <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"  } }>
    © 2020 Copyright:
    <a className="text-white" href="/">Your Cart</a>
  </div>
</footer>

</div>
  )
};

export default HomePage;
