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
    const newTodos = addValue.filter((_id, i) => i !== index);
    setAddvalue(newTodos);
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