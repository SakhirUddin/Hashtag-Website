import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.jpg'
import '../App.css';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-">
      <div className="container-fluid">
        <a className="logo" href=".">
          <img src={logo} alt="Your Logo" height="30" className="logo" />
        </a>

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

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ '--bs-scroll-height': '100px' }}>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href=",">
                Your Cart
              </a>
            </li>
          </ul>

          <form className="d-flex">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
            <button className="btn btn-secondary ms-2" id='login' type="submit">
              Login
            </button>
            <button className="btn btn-primary ms-2" id='signup' type="submit">
              Signup
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;