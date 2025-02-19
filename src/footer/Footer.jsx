import React from "react";
import "./footer.css";
import img10 from "../assets/booklogo.webp";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <div className="pg-footer">
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-content-column">
              <div className="footer-logo">
                <div className="searchBox-z">
                  <img style={{ width: "100px" }} src={img10} alt="#" />
                </div>
              </div>
            
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Company</h2>
                <ul id="menu-company" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={'/contact'}>Contact</Link>
                  </li>
                  <li className="menu-item menu-item-type-taxonomy menu-item-object-category">
                    <Link to={'/news'}>News</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={'/careers'}>Careers</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Legal</h2>
                <ul id="menu-legal" className="footer-menu-list">
                  <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-170434">
                    <Link to={'/privacy'}>Privacy policy</Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={'/terms'}>Terms of Use</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-menu">
                <h2 className="footer-menu-name"> Quick Links</h2>
                <ul id="menu-quick-links" className="footer-menu-list">
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link /* target="_blank" rel="noopener noreferrer" */ to={'/support'}>
                      Support Center
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-custom menu-item-object-custom">
                    <Link  to={'/service'}>
                      Service Status
                    </Link>
                  </li>
                  <li className="menu-item menu-item-type-post_type menu-item-object-page">
                    <Link to={'/security'}>Security</Link>
                  </li>
               
                </ul>
              </div>
            </div>
            <div className="footer-content-column">
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> Let's Chat</h2>
                <p className="footer-call-to-action-description"> 
                  Have a support question?
                </p>
                <a
                  className="footer-call-to-action-button button"
                  href="/"
                  target="_self"
                >
                  Get in Touch
                </a>
              </div>
              <div className="footer-call-to-action">
                <h2 className="footer-call-to-action-title"> You Call Us</h2>
                <p className="footer-call-to-action-link-wrapper">
                   <a
                    className="footer-call-to-action-link"
                    href="tel:0124-64XXXX"
                    target="_self"
                  >
                    0124-64XXXX
                  </a>
                </p>
              </div>
            </div>
            <div className="footer-social-links">
              <svg
                className="footer-social-amoeba-svg"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 236 54"
              >
                <path
                  className="footer-social-amoeba-path"
                  d="M223.06,43.32c-.77-7.2,1.87-28.47-20-32.53C187.78,8,180.41,18,178.32,20.7s-5.63,10.1-4.07,16.7-.13,15.23-4.06,15.91-8.75-2.9-6.89-7S167.41,36,167.15,33a18.93,18.93,0,0,0-2.64-8.53c-3.44-5.5-8-11.19-19.12-11.19a21.64,21.64,0,0,0-18.31,9.18c-2.08,2.7-5.66,9.6-4.07,16.69s.64,14.32-6.11,13.9S108.35,46.5,112,36.54s-1.89-21.24-4-23.94S96.34,0,85.23,0,57.46,8.84,56.49,24.56s6.92,20.79,7,24.59c.07,2.75-6.43,4.16-12.92,2.38s-4-10.75-3.46-12.38c1.85-6.6-2-14-4.08-16.69a21.62,21.62,0,0,0-18.3-9.18C13.62,13.28,9.06,19,5.62,24.47A18.81,18.81,0,0,0,3,33a21.85,21.85,0,0,0,1.58,9.08,16.58,16.58,0,0,1,1.06,5A6.75,6.75,0,0,1,0,54H236C235.47,54,223.83,50.52,223.06,43.32Z"
                ></path>
              </svg>
              <a
                className="footer-social-link linkedin"
                href="/"
                target="_blank"
              >
                <span className="hidden-link-text">Linkedin</span>
                <FaLinkedinIn />
              </a>
              <a
                className="footer-social-link twitter"
                href="/"
                target="_blank"
              >
                <span className="hidden-link-text">Twitter</span>
                <FaTwitter />
              </a>
              <a
                className="footer-social-link youtube"
                href="/"
                target="_blank"
              >
                <span className="hidden-link-text">Youtube</span>
                <FaYoutube />
              </a>
              <a className="footer-social-link github" href="/" target="_blank">
                <span className="hidden-link-text">Github</span>
                <FaGithub />
              </a>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="footer-copyright-wrapper">
              <p className="footer-copyright-text">
                <a className="footer-copyright-link" href="/" target="_self">
                  ©{currentYear}. | Designed By: JUBIl P REJI | All rights reserved.
                </a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
