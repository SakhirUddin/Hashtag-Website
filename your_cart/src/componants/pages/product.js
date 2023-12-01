// src/components/ProductPage.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the specific product based on productId
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchData();
  }, [productId]);

  return (
    <div>
      {product ? (
        <ProductDetail product={product} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductPage;
