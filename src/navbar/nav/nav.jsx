import { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import img1 from "../../assets/booklogo.webp";
import { TbShoppingCartCancel } from "react-icons/tb";

function Navbar() {
  const navRef = useRef();
  const [showIcon, setShowIcon] = useState(false);

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setShowIcon((prev) => !prev);
  };

  return (
    <header>
      <img src={img1} alt="Book Logo" className="logo" />
      <nav ref={navRef}>
        <ul>
          <li key="about-us">About Us</li>
          <li key="contact-us">Contact Us</li>
          <li key="login">
            <button className="btn-uniq">
              <b>Login</b>
            </button>
          </li>
          <li key="cart">
            <TbShoppingCartCancel />
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
