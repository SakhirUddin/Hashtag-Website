import { useState } from "react";
import "./Dropdown.css";
import { IoMdArrowDropdown } from "react-icons/io";
function Dropdown() {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="dropdown">
      <div className="dropdown-btn">
        All Category
        <IoMdArrowDropdown
          onClick={(e) => {
            setIsActive(!isActive);
          }}
        ></IoMdArrowDropdown>
      </div>
      {isActive && (
        <div className="dropdown-content">
          <div className="dropdown-item">smart phones</div>
          <div className="dropdown-item">Earbuds</div>
          <div className="dropdown-item">cloths</div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
