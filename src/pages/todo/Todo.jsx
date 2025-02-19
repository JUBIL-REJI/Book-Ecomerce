import React, { useState } from 'react'

const Todo = () => {
  
  const [inputValue , setinputValue] = useState('');
  const [addValue , setAddvalue] = useState([]);
  const [show ,setShow] =useState(null)
  const HandleCick = () =>{
    setAddvalue([...addValue,inputValue]);
    setinputValue('')
  }
  const handleDeleteTodo = (index) => {
  addValue.filter((_id, i) => i !== index);
   
  };

const  HandleHome =()=>{
  setShow(true);
  
}
console.log(show);
  
  return (
   
   
      <div>
        <button style={{padding:'38px',margin:'30px',backgroundColor:'wheat',cursor:'pointer',fontSize:'30px' }} onClick={()=>HandleHome(show)}>&#128536;</button>
        
        
        
        <input
            className='input-in'
            value={inputValue}
            type='text'
            placeholder='	&#128513;'
            onChange={(e)=>setinputValue(e.target.value)}
            style={{padding:'39px'}}
          />
         
            <button onClick={HandleCick} style={{padding:'38px',margin:'30px',backgroundColor:'wheat',cursor:'pointer' }}>ADD ME&#128517;</button>
            <div>
          {
            addValue.length === 0 ? <div style={{color:'white',fontWeight:'bold'}}><h1>add your todo</h1></div>:
            addValue?.map((item , index)=>(
            <div key={index} >
            <ul style={{display:'flex',fontSize:'40px'}}>
            <li style={{color:'white'}}>
            {item}
          </li>
          <div onClick={()=>handleDeleteTodo(index)} style={{cursor:'pointer'}}>&#128515;</div>
         </ul>
       </div>
      
       ))}
         </div>
  
     </div>
     
   
  )
}

export default Todo




 /* // Local state for managing quantities
 const [quantities, setQuantities] = useState(
  items.map(() => 1) // Initial quantity for all items is 1
);

const handleDelete = (index) => {
  const itemToDelete = items[index];
  dispatch(removeFromCart(itemToDelete));
  setQuantities((prev) => prev.filter((_, i) => i !== index));
};

const handlePlus = (index) => {
  setQuantities((prev) =>
    prev.map((q, i) => (i === index ? q + 1 : q))
  );
};

const handleMinus = (index) => {
  setQuantities((prev) =>
    prev.map((q, i) => (i === index && q > 1 ? q - 1 : q))
  );
};

// Calculate subtotal, tax, and total
const calculateSubtotal = () =>
  items.reduce(
    (sum, item, index) =>
      sum +
      (item.saleInfo?.retailPrice?.amount || 0) * quantities[index],
    0
  );  

const taxRate = 0.1; // Example: 10% tax
const deliveryCharge = 50; // Flat delivery charge
const subtotal = calculateSubtotal();
const tax = subtotal * taxRate;
const total = subtotal + tax + deliveryCharge; */