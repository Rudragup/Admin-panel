import React from 'react'

function Card({val}) {
async function NotApporved(){
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
    window.location.reload()
}
function approved(){
    console.log("done")
}
  return (
     <>

<div className="card bg-base-100 w-96 shadow-xl">
  <div className="card-body a">
    <h2 className="card-title">{val.name}</h2>
    <h2 className="card-title">{val.email}</h2>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={approved}>Apporved</button>
      <button className="btn btn-primary" onClick={NotApporved}>Not Apporved</button>
    </div>
  </div>
</div>
     </>
    )
}

export default Card