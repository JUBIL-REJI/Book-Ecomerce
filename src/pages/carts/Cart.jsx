import React from "react";
import "./cart.css";
import Navbar from "../../navbar/Navbar";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {  minusQuantity, plusQuantity, removeFromCart } from "../../Redux/cartSlice";
import imgplaceholder from "../../assets/blog/graphi.jpeg";


function Cart() {
 
 
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => state.carts);
  const items = cartItem.cart || [];


  const handleDelete = (item) => {
    dispatch(removeFromCart(item));
  };
 const   handleplus  = (item)=>{
  dispatch(plusQuantity(item))
 }
 const handleMinus = (item)=>{
  dispatch(minusQuantity(item))
 }
 
  return (
    <>
      <Navbar />
      <br />
      <section>
        <div className="container">
          <div className="cart">
            <div className="col-md-12 col-lg-10 mx-auto">
              {items.length > 0 ? (
                items.map((item) => (
                  <div className="cart-item" key={item.id}>
                    <div className="row">
                      <div className="col-md-7 center-item">
                        <img
                          src={
                            item.volumeInfo.imageLinks?.smallThumbnail ||
                            imgplaceholder
                          }
                          alt={item.volumeInfo.title || "Product"}
                        />
                        <h5 className="title-edit">{item.volumeInfo.title}</h5>
                      </div>
                      <div className="col-md-5 center-item">
                        <div className="number-spinner">
                          <div className="minus-btn">
                            <FiMinus
                              style={{ fontSize: "20px" }}
                              onClick={()=>handleMinus(item)}
                            />
                          </div>
                          <p
                            style={{
                              fontSize: "20px",
                              padding: "5px",
                              color: "wheat",
                            }}
                          >
                           
                           {item.qty}
                          </p>
                          <div className="plus-btn">
                            <FiPlus
                              style={{ fontSize: "20px" }}
                              onClick={()=>handleplus(item)}
                            />
                          </div>
                        </div>
                        <h5 id="phone-total">
                          ₹<span>{(item.saleInfo?.retailPrice?.amount * item.qty / 2 || <>out of stock</>) }</span>
                          <span className="old-price">{(item.saleInfo?.retailPrice?.amount * item.qty || <></>) }</span>
                        </h5>
                        <div className="bin-btn">
                          <RiDeleteBin6Line
                            onClick={() => handleDelete(item)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="empty-cart">
                  <h3>Your cart is empty!</h3>
                
                </div>
              )}

              {items.length > 0 && (
                <div className="cart-item">
                  <div className="row g-2">
                    <div className="col-6 status">
                      <h5>Delivery Charge: </h5>
                      <h5>Subtotal: </h5>
                      <h5>Tax: </h5>
                      <h5>Total: </h5>
                    </div>
                    
                    <div className="col-6 collection">
                     <h5>0</h5>
                     <h5>0</h5>
                     <h5>0</h5>
                     <h5>0</h5>
                    </div>
                  </div>
                </div>
              )}

              {items.length > 0 && (
                <div className="col-md-12 pt-4 pb-4">
                  <button type="button" className="check-out">
                    Check Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Cart;


