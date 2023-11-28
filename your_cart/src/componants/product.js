import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductCard = ({ product }) => {
  const { image, title, description, price, category } = product;

  return (
    <div className="col-md-2 ">
      <div className="card h-10">
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>
          {/* <p className="card-text">{category}</p> */}
          <a href="./" className="btn btn-outline-success">
            Add to Cart
          </a>
        </div>
      </div>
    </div>
  );
};

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    // Fetch data from the Fake Store API
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Apply filtering based on the selected category
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === selectedCategory);
      setFilteredProducts(filtered);
    }
  }, [selectedCategory, products]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Adjust filter options based on Fake Store API categories
  const categories = ['All', 'electronics', 'jewelery', 'men\'s clothing', 'women\'s clothing'];

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        {/* Your Navbar component */}
      </nav>

      <div className="container mt-4">
        {/* Filter buttons */}
        <div className="mb-2 text-center">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              className={`btn btn-outline-primary mx-2 mb-2 ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product cards */}
        <div className="row">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
