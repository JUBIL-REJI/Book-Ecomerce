import React, { useContext } from "react";
import Product from "./product";
import AppContext from "../../context/UserContext";

function ProductShow() {
  const { searchData } = useContext(AppContext);
  return (
    <div className="grid-container">
      <Product book={searchData} />
    </div>
  );
}

export default ProductShow;
