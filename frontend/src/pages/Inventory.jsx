import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "../inventory.css"
function Inventory() {
 
const id=localStorage.getItem('loggedInId');
console.log(id);

const [pro,setPro]=useState([]);
const[token,setToken]=useState('');

useEffect(()=>{
  const token=localStorage.getItem('token');
  setToken(token);
},[])

const [product,setProduct]=useState();




useEffect(()=>{
  const list= async () =>{
    try{
const res=await axios.post('http://localhost:8000/product/buy',{userid:id});
console.log(res.data);
setPro(res.data);
}
catch(err){
 console.log(err)
}
}
list();
},[])


const [values, setValues] = useState(0);




async  function buyNow(e){
  e.preventDefault();
  try{
    const data={
     "productId": product,
  "quantity":values,
  "token1":token
    };
    console.log(data);
const res=await axios.post('http://localhost:8000/product/purchase',{
  "productId": product,
  "quantity":values,
  "token1":token
})

window.location.reload();

  }
  
  catch(err){
    console.log(err);
  }
        }




return (
  <>
{
  pro.map((item)=>{

    const path=item.image;
    const quantity=item.quantity;
    const id=item._id;
    const rangeStart = 0;
    const rangeEnd = quantity;
    const options = [];
    for (let i = rangeStart; i <= rangeEnd; i++) {
      options.push(i);
    }
    const handleChange = (event) => {
    setValues(event.target.value);
    setProduct(id);
    };









    return(
    
    <>    
      <div className='con1'>
      <div>
      <img src={`http://localhost:8000/images/${path}`} />
        </div> <div> 
          <h1>name:{item.name}</h1>
        <h1>Price:{item.price}</h1>
        <h1>quantity:{item.quantity}</h1>
      
        <button className="btn btn-danger" onClick={buyNow}>
       Buy Now
      </button>


      <div>
      <label htmlFor="rangeDropdown">Select a Quantity:</label>
      <select
        id="rangeDropdown"
        value={values}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      
    </div>


        </div>
      </div>
    </>
    )
  })  
}
  </>
  )
}

export default Inventory