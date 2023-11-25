import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import "./Header.css";
import Dropdown from "../dropdown/Dropdown";
function Header() {
  return (
    <div className="container">
      <div className="logo">
        <img src="https://logowik.com/content/uploads/images/university-of-porto7995.jpg" alt=""/>
      </div>
      <div className="main-d-down">
        <input placeholder="Search.." />
        <Dropdown />
        <span>
          {" "}
          <button className="search-btn">
            <AiOutlineSearch
              style={{ fontSize: "20px", backgroundColor: "white" }}
            />
          </button>
        </span>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
        <BsTelephone style={{ fontSize: "25px" }} />
        <div className="contact-us">
          <p>Contact us</p>
          <h2>83434492085</h2>
        </div>
        <div className="user-icon">
          <AiOutlineUser />
          <AiOutlineHeart />
        </div>
      </div>
    </div>
  );
}

export default Header;
