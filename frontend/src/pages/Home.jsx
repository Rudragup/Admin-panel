import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../util';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, [])
const userid=localStorage.getItem('loggedInId');
    const handleLogout = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUser');
        handleSuccess('User Loggedout');
        setTimeout(() => {
            navigate('/login');
        }, 1000)
    }
    const [pro,setPro]=useState([]);
    useEffect( ()=>{
        const list= async () =>{
          
            try{
              const res=await fetch('http://localhost:8000/product/details',{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify({userid})
              })
              const res1=await res.json();
              console.log(res1.products)
              setPro(res1.products);
           
         }
         catch(err){
           console.log(err)
         }
        }
        list();
     },[])
    return (
        <div>
            <h1>Welcome {loggedInUser}</h1>
            
              <div className='container'>
                {pro.map((item)=>{
                    return(
                        <div className='card1' key={item._id}>
                            <img src='./1.png' />
                            <h3>{item.name}</h3>
                            <h4>{item.price}</h4>
                             <h4>{item.quantity}</h4>
                        </div>
                    )
                })}
                </div>

            <button><Link to='/add_products'>Add_products</Link></button>

            <button onClick={handleLogout}>Logout</button>
           
            <ToastContainer />
        </div>
    )
}

export default Home