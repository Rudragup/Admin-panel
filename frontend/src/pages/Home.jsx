import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../util';
import './Home.css'
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
        <div className='home'>
            <h1>Welcome {loggedInUser}</h1>
            <table>
            <tr>
                <div >
                <td>Product-Image</td>
                <td>Product-Name</td>
                <td>Price</td>
                <td>Quantity</td>
                <td>Created At</td>
                </div>
             
            </tr>
              <div>
                {pro.map((item)=>{
                    const path=item.image;
                    return(
                        <div  key={item._id}>
            <tr>
                         <td><img src= {path}/> </td>
                          <td>  <h3>{item.name}</h3> </td>
                          <td>  <h4>{item.price}</h4> </td>
                         <td>    <h4>{item.quantity}</h4>   </td>
                         <td>    <h4>{item.createdAt}</h4>   </td>
                             </tr>
                        </div>
                    )
                })}

   <div className='button'>       
     <button><Link to='/add_products'>Add_products</Link>
   
   </button>

            <button onClick={handleLogout}>Logout</button>
                </div>
                </div>
           </table>
            <ToastContainer />
        </div>
    )
}

export default Home