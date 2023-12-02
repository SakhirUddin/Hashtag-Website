import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import sale1 from './images/sale1.jpg';
import logo2 from './images/logo2.png';

const Home = () => {
  return (
    <div>
      <div id="carouselExample" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={sale1} // Replace with the actual URL of your first image
              className="d-block "
              alt="Carousel Item 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={logo2} // Replace with the actual URL of your second image
              className="d-block "
              alt="Carousel Item 2"
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon " aria-hidden="true"></span>
          <span className="visually">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
