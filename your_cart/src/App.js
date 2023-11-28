import React from 'react';
import './App.css';
import Navbar from "./componants/Navbar";
import Carousel from "./componants/crowsel"
// import CartPage from './componants/product';
import Products from './componants/product';



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      
      <Products/>
    </div>
  );
}

export default App;
