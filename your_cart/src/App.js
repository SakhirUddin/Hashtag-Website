import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './componants/pages/home';
import Login from './componants/pages/Login';
import Cart from './componants/pages/cart';
import SignUp from "./componants/pages/SignUp"
// import ProductPage from './componants/pages/product';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path='/cart' element={<Cart/>}/>
        {/* <Route path="/product/:productId" component={ProductPage} /> */}
      </Routes>
    </Router>
  );
}

export default App;
