// src/components/ProductDetail.js
import React from "react";

const ProductDetail = ({ product }) => {
  return (
    <div>
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      {/* Add other product details as needed */}
    </div>
  );
};

export default ProductDetail;
