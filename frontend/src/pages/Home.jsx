import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleError, handleSuccess } from '../util';
import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import axios from 'axios';

function Home() {
    const [loggedInUser, setLoggedInUser] = useState('');

    const navigate = useNavigate();
    useEffect(() => {
        setLoggedInUser(localStorage.getItem('loggedInUser'));
    }, [])

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
              const res=await axios.get("http://localhost:8000/product/details");
            console.log(res.data);
          setPro(res.data);
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
                            <img src={item.image} alt="image" />
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