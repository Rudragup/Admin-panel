import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import "../inventory.css"
function Inventory() {
  const [userid, setuserid] = useState();
const id=localStorage.getItem('loggedInId');
  
 console.log(id);

const [pro,setPro]=useState([]);
useEffect(()=>{
  const list= async () =>{
    try{
const res=await axios.post('http://localhost:8000/product/buy',{userid:id});
console.log(res.data);
setPro(res.data);

    // const res1=await res.json();
    
    // setPro(res1.products);
 
}
catch(err){
 console.log(err)
}
}
list();
},[])
  return (
  <>
{
  pro.map((item)=>{
    const path=item.image;
    return(
    
      <div className='con'>
      <div>
      <img src={`http://localhost:8000/images/${path}`} />
        </div> <div> 
          <h1>name:{item.name}</h1>
        <h1>Price:{item.price}</h1>
        <h1>quantity:{item.quantity}</h1>
        </div>
      </div>
    )
  })  
}
  </>
  )
}

export default Inventory