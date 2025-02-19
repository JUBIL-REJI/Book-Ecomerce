import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
    qty: 0,
    gst: 10,
    price:0,
    FirstPurchase_offer: false,
    EveryDay_offer:5,
    RegularOffer:5,
    totalQuantity:0,
    totalPrice:0,
};

export const addTocartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the item is already in the cart
      const itemInCart = state.cart.findIndex(item => item.id === action.payload.id);
      
      if (itemInCart !== -1) {
        // If the item is already in the cart, increase its quantity
        state.cart[itemInCart].qty++;
      } else {
        // If the item is not in the cart, add it
        state.cart.push({
          ...action.payload,
          qty: 1, // Add item with initial quantity 1
        });
      }
    },
    removeFromCart: (state, action) => {
      const itemInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemInCart !== -1) {
        const item = state.cart[itemInCart];

        // Update total price and quantity
        state.totalQuantity -= item.qty;
        state.totalPrice -= item.qty * item.price;

        // Remove the item from the cart
        state.cart.splice(itemInCart, 1);
      }
    },
    plusQuantity:(state,action) =>{
      const itemInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemInCart !== -1){
        state.cart[itemInCart].qty+=1;   
      }
    },
    minusQuantity:(state,action)=>{
      const itemInCart = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if(itemInCart !== 1){
        if(state.cart[itemInCart].qty > 1){
          state.cart[itemInCart].qty-=1; 
        }
      }
    },
   
  }
});

export const { addToCart , removeFromCart,plusQuantity,minusQuantity } = addTocartSlice.actions;

export default addTocartSlice.reducer;
