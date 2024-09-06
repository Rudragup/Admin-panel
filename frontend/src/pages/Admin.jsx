import React, { useEffect, useState } from 'react'
import '../admin.css'
import axios from "axios";
import Card from './Card';
function Admin() {
  const [details,setDetails]=useState([]);
  const url="http://localhost:8000/admin/detail";
  useEffect( ()=>{
     const list= async () =>{
      try{
           const res=await axios.get(url);
         console.log(res.data);
         setDetails(res.data);
      }
      catch(err){
        console.log(err)
      }
     }
     list();
  },[])
  return (
   <>
   <div className='admin'>
   <h1>Admin Panel</h1>
   <div className='admin-card'>
   <table>
        <tr>
        <th>UserName</th>
        <th>Email</th>
        <th>Approvation</th>
        <th>Created At</th>
      </tr>
      
    {details.map((item)=>{
      console.log(item)
      console.log(item.email);
      if(item.email==="rudragupta077@gmail.com"){
        return null
      }
    else  return <tr><Card val={item} /></tr>
     })}
    
</table>
   </div>
   </div>
   </>
  )
}

export default Admin