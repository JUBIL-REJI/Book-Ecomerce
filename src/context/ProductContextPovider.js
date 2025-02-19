import React, {useState } from "react";
import AppContext from "./UserContext";
import { useSelector } from "react-redux";

const ProductContextPovider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [selected, setSelected] = useState(null);
  const [searchData, setsearchData] = useState([]);
  const [open, setOpen] = useState(false);

  const cartItem = useSelector((state) => state.carts);
  const items = cartItem.cart;

 

  return (
    <AppContext.Provider
      value={{
        product,
        selected,
        setOpen,
        setProduct,
        setSelected,
        searchData,
        setsearchData,
        open,
        items,
        cartItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ProductContextPovider;
