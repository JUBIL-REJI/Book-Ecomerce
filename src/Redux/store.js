import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cartSlice'; // Relative import from the same directory


const store = configureStore({
  reducer: {
    carts:cartSliceReducer
  }
  
})

export default store;