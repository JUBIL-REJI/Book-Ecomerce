import React, { useContext, useState } from "react";
import "./home.css";
import axios from "axios";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import img1 from "../assets/icons8-book-64.png";
import PictureDetails from "../elemnts/PictureDetails";
import sec from "../assets/png2.png";
import Blogimages from "../elemnts/blogimages/Gridimage";
import Offerpage from "../pages/Offerpages/Offerpage";
import AppContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Contentnavigator from "../pages/contendNavigate/Contentnavigator";

function Home() {
  const { setsearchData } = useContext(AppContext);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const searchBook = async (evnt) => {
    if (evnt.key === "Enter") {
      await axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyD1D-ojjTk44s0DPgRp4VR6s5lw8jvGAgo`
        )
        .then((res) => setsearchData(res.data.items))
        .catch((err) => console.log(err));
      setSearch("");
      navigate("/productpage");
    }
  };

  return (
    <>
      <Navbar />
      <Contentnavigator />
      <section className="mains">
        <div className="main">
          <div>
            <div class="container-Z">
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

      <Blogimages />
      <Offerpage />
      <PictureDetails />
      <br />
      <Footer />
    </>
  );
}

export default Home;
