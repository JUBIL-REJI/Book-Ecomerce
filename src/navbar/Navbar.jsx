import React, { useContext, useState, useRef } from "react";
import "./Navbar.css";
import img1 from "../assets/booklogo.webp";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbShoppingCartCancel } from "react-icons/tb";
import { useNavigate ,Link} from "react-router-dom";
import AppContext from "../context/UserContext";
import { FaRegUser } from "react-icons/fa";

function Navbar() {
  const { items } = useContext(AppContext);

  const navRef = useRef();
  const [showIcon, setShowIcon] = useState(false);

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setShowIcon((prev) => !prev);
  };
  const naviGate = useNavigate();

  return (
    <header>
      <figure className="" onClick={() => naviGate("/")}>
        <img
          src={img1}
          alt="Book Logo"
          className="logo"   
        />
      </figure>

      <nav ref={navRef}>
        <ul>
        <Link to={'/About'}> <li key="about-us">About Us</li></Link>
        <Link to={'/contact'}> <li key="contact-us">Contact Us</li></Link>
         <li key="login">
          <button className='btn-uniq' onClick = {() => naviGate('/loginpage')}>
            <span aria-hidden="true">login</span>
            <span></span>
            <span>login</span>
          </button>
          </li>
          <li key="cart" onClick={() => naviGate("/cartpage")}>
            <TbShoppingCartCancel style={{ fontSize: "25px" }} />
            <span className="cart-count">{items.length}</span>
          </li>
          <li>
            <FaRegUser style={{ fontSize: "20px" }} />
          </li>
        </ul>

        <button
          className="nav-btn nav-close-btn"
          onClick={toggleNavbar}
          aria-label="Close Navigation"
        >
          <FaTimes />
        </button>
      </nav>
      <button
        className="nav-btn"
        onClick={toggleNavbar}
        aria-label="Open Navigation"
      >
        {showIcon ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
}

export default Navbar;
