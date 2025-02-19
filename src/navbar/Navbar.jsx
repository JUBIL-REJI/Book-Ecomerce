import React, { useState } from "react";
import "./Navbar.css";
import img1 from "../assets/booklogo.webp";
import { FiMenu } from "react-icons/fi";
import { TbShoppingCartCancel } from "react-icons/tb";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleClickevent = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="containers">
      <div className="searchBox">
        <img style={{ width: "100px" }} src={img1} alt="#" />
        <h5>
          Book Ecomerce
          <br />
          Explore⭐
        </h5>
      </div>
      <div className={menuOpen ? "opened" : "opens"}>
        <ul>
          <li> About us</li>
          <li> contact us</li>
          <li>
            <button className="btn-uniq">
              <b>Login</b>
            </button>
          </li>
          <li>
            <TbShoppingCartCancel />
          </li>
        </ul>
      </div>

      <div className="icon-menu" onClick={handleClickevent}>
        {menuOpen ? <RxCross2 /> : <FiMenu />}
      </div>

      <div id="cart-bag">
        <h4>About us</h4>
        <h4>Contact</h4>
        <button className="btn-uniq">
          <b>Login</b>
        </button>
        <TbShoppingCartCancel style={{ fontSize: "30px", cursor: "pointer" }} />
        <h4>WishList</h4>
      </div>
    </div>
  );
}

export default Navbar;
