import React from "react";
import Home from "./home/home";
import ProductContextPovider from "./context/ProductContextPovider";
import { BrowserRouter,Route, Routes } from "react-router-dom";
import Oneproduct from "./pages/oneproductview/Oneproduct";
import Cart from "./pages/carts/Cart";
import ProductShow from "./pages/product/productShow";
import NotFound from "./pages/notfound/NotFound";
import { Provider } from "react-redux";
import store from "./Redux/store";
import CatecoriesDetail from "./pages/catecories-detail/CatecoriesDetail";
import Nav from "./navbar/nav/nav";
import LoginPage from "./login/LoginPage";
import UserdetailsDailogbox from "./pages/userdetails/UserdetailsDailogbox";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ForgetPassword from "./login/ForgetPassword";
import Careers from "./footer/FooterComponets/Company/Careers";
import News from "./footer/FooterComponets/Company/News";
import PrivacyPolicy from "./footer/FooterComponets/Company/PrivacyPolicy";
import TermsofUse from "./footer/FooterComponets/Company/TermsofUse";
import Security from "./footer/FooterComponets/QuickLINKS/Security";
import ServiceStatus from "./footer/FooterComponets/QuickLINKS/ServiceStatus";
import SUpportCenter from "./footer/FooterComponets/QuickLINKS/SUpportCenter";
import SellingHomePage from "./pages/sellingpage/SellingHomePage";






function App() {
  return (
  <Provider store={store}>
   <ProductContextPovider>
   
    <BrowserRouter>
     <Routes>

      <Route exact path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Oneproduct/>}/>
      <Route path="/cartpage" element={<Cart/>}/>
      <Route path="/productpage" element={<ProductShow/>}/>
      <Route path="*" element={<NotFound/>}/>
      <Route path="/catecoriesdetail/:title" element={<CatecoriesDetail/>}/>
      <Route path="/nav" element={<Nav/>}/>
      <Route path="/sellinghomepage" element={<SellingHomePage/>}/>
      <Route path="/loginpage" element={<LoginPage/>}/>
      <Route path="/reset" element={<ForgetPassword/>}/>
      <Route path="/userdetails" element={<UserdetailsDailogbox/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/careers" element={<Careers/>}/>
      <Route path="/news" element={<News/>}/>
      <Route path="/privacy" element={<PrivacyPolicy/>}/>
      <Route path="/terms" element={<TermsofUse/>}/>
      <Route path="/security" element={<Security/>}/>
      <Route path="/service" element={<ServiceStatus/>}/>
      <Route path="/support" element={<SUpportCenter/>}/>

      
     </Routes>
    </BrowserRouter> 
    
   </ProductContextPovider>
  </Provider>
  );
}

export default App;
