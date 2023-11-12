import React from "react";
import sale1 from "./images/sale1.jpg"
import sale2 from "./images/sale2.jpg"
import sale3 from "./images/sale3.jpg"
const Crowsel = () => {
  return (
    <div>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={sale1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sale2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={sale3} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
  );
};

export default Crowsel;
