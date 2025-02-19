import React, {  useEffect, useState } from 'react'
import AppContext from './UserContext';
import axios from 'axios';


const ProductContextPovider = ({children}) => {  

  const [product , setProduct] = useState([]);
  const [selected , setSelected] = useState(null);
  const [searchData, setsearchData] = useState([]);


    
  return (
    <AppContext.Provider value={{product,selected,setSelected,searchData,setsearchData,}}>
      {children}
    </AppContext.Provider>
  )
}

export default ProductContextPovider