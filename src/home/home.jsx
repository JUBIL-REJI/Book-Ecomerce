import React, { useContext, useState } from "react";
import "./home.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import img1 from "../assets/icons8-book-64.png";
import PictureDetails from "../elemnts/sellbook/PictureDetails";
import sec from "../assets/png2.png";
import Offerpage from "../pages/Offerpages/Offerpage";
import AppContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Contentnavigator from "../pages/contendNavigate/Contentnavigator";
import CateagoresPage from "../elemnts/Catergories/CateagoresPage";


function Home() {
  const {setsearchData } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const YOUR_API_KEY = process.env.REACT_APP_BOOKS_API_KEY;


const searchBook = async (event) => {
  if (event.key === "Enter") {
    if (!search.trim()) {
      alert("Please enter a valid book name.");
      return;
    }
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${search.trim()}&key=${YOUR_API_KEY}`
      );
      setsearchData(response.data.items || []);
      setSearch("");
      navigate("/productpage");
    } catch (error) {
      console.error("Error fetching books:", error);
      alert("Failed to fetch books. Please try again later.");
    }
  }
};

  return (
    <>
      <Navbar />
      <Contentnavigator />
      <section className="mains">
        <div className="main">
          <div>
            <div className="container-Z">
              <p id="metal">
                BOOKS
                <img className="img-book" src={img1} alt="#" /> ARE OUR FUTURE|
              </p>
            </div>
            <p id="glass">CHOOSE... YOUR OWN!</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                className="input-edit"
                type="text"
                placeholder="Search your books..."
                aria-label="Search for books"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={searchBook}
              />
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                className="img-i"
                style={{ width: "200px", boxShadow: "wheat" }}
                src={sec}
                alt="#"
              />
            </div>
          </div>
        </div>
      </section>
      
      <CateagoresPage/>
      <Offerpage />
      <PictureDetails />
      <br />
      <Footer />
    </>
  );
}

export default Home;
