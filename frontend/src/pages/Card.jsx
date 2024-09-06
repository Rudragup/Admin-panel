import React, { useEffect } from 'react'

function Card({val}) {
    useEffect(()=>{
        let a=document.getElementById(val._id)
       if(val.approved===false){
        a.style.backgroundColor="purple"
       }
       else{
        a.style.backgroundColor="green"
    }
})
     
    async function Apporved(){
    let a =document.getElementById(val._id)
console.log(a.style.backgroundColor)
if(a.style.backgroundColor==="purple"){
    a.style.backgroundColor="green"
}
else{
    a.style.backgroundColor="purple"
}
    console.log(val.email)
    try{
const check=await fetch("http://localhost:8000/admin/apporve",{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
    "email":val.email
    })

})
    }
    catch(err){
        console.log(err)
    }

    
}

  return (
     <>

<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body a">

    <td><h2 className="card-title">{val.name}</h2>
  </td>  <td> <h2 className="card-title">{val.email}</h2> </td>
   <td>
     <div className="card-actions justify-end">
      <button className="btn btn-primary" id={val._id} onClick={Apporved}>Apporved</button>
    </div>
 </td>    
 <td> <h2 className="card-title">{val.createdAt}</h2> </td>  
  </div>
</div>
     </>
    )
}

export default Card