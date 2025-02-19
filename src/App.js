import React from "react";
import Home from "./home/home";
import ProductContextPovider from "./context/ProductContextPovider";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Oneproduct from "./pages/oneproductview/Oneproduct";
import Cart from "./pages/carts/Cart";
import ProductShow from "./pages/product/productShow";
import NotFound from "./pages/notfound/NotFound";





function App() {
  return (
   <ProductContextPovider>
    <BrowserRouter>
     <Routes>
         


      <Route exact path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Oneproduct/>}/>
      <Route path="/cartpage" element={<Cart/>}/>
      <Route path="/productpage" element={<ProductShow/>}/>
      <Route path="*" element={<NotFound/>}/>


      
     </Routes>
    </BrowserRouter> 
   </ProductContextPovider>
  );
}

export default App;
