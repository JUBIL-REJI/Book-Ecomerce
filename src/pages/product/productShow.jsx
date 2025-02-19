import React, { useContext } from "react";
import Product from "./product";
import AppContext from "../../context/UserContext";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

function ProductShow() {
  const { searchData } = useContext(AppContext);
  return (
    <>
    <Navbar/>
     <div className="grid-container">
      <Product book={searchData} />
    </div>
    <Footer/>
    </>
   
  );
}

export default ProductShow;
