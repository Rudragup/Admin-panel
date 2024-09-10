import React, { useEffect, useState } from 'react'
import { FaBell } from "react-icons/fa";
import Notfication_card from '../utilss/Notfication_card';
import axios from 'axios';

function Notification() {
  const [data,setData] = useState([]);
   const [len,setlen] = useState();
  useEffect(()=>{
    const List =async(req,res)=>{
      const userid=localStorage.getItem("loggedInId");
      try{
        const response = await axios.post("http://localhost:8000/product/message",{userid});
        console.log(response.data.mes);
        setData(response.data.mes);
        setlen(response.data.mes.length);
      }
      catch(err){
        console.log(err);
      }
    }
    List()
  },[]);
  return (
    <>
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>{document.getElementById('my_modal_5').showModal();setlen(0)}}><FaBell /></button>
<div className='mes'>{len}</div>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Notification</h3>
 <Notfication_card />
    <div className="modal-action">
      <form method="dialog">
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
</>
  )
}

export default Notification