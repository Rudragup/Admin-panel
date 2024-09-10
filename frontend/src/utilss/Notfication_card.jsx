import React, { useState,useEffect } from 'react'
import axios from "axios";
import { ImCross } from "react-icons/im";
function Notfication_card() {
  const [data,setData] = useState([]);
  const userid=localStorage.getItem("loggedInId");
  useEffect(()=>{
    const List =async(req,res)=>{
      try{
        const response = await axios.post("http://localhost:8000/product/message",{userid});
        console.log(response.data.mes);
        setData(response.data.mes);
      }
      catch(err){
        console.log(err);
      }
    }
    List()
  },[])
  return (
    <>
    {data.map((item)=>{
      return ( <div style={{display:'flex',justifyContent:'space-between'}}><p className="py-4">Username:{item.username} <br />
  Product Name: {item.Product_name}  <br />  {item.message}</p> 
      <button style={{width:'3vw',height:'7vh',display:'flex',justifyContent:'center'}}  onClick={
        async()=>{
        axios.post("http://localhost:8000/product/delete",{
          _id:item._id
        })
        window.location.reload();
      }} >
        <ImCross />
        </button> </div>
      )
    })
  }
    </>
  )
}

export default Notfication_card