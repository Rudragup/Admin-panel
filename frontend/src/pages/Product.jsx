import React from 'react'
import { useState } from 'react';
function Product() {
    const [image, setImage] = useState("");
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [quantity, setQuantity] = useState("");
    const token=localStorage.getItem("token");

    const handleproduct = (e) => {
            e.preventDefault();
            const formData = new FormData();
            const fileData = document.getElementById('file').files[0];
            console.log(fileData);
            formData.append('file', fileData);
          
            const product = {
                image,
                name,
                price,
                quantity,
                token,
                formData
            }
          if(!image && !name && !price && !quantity){
          alert("Please fill all the fields");
          }
          try{
          const response=   fetch("http://localhost:8000/product/add_product", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(product)
                })
              .then(res => res.json())
              .then(data => console.log(data))
                window.location.reload();
          }
          catch(err){
                      console.log(err);
                  }
        }

    const changePrice = (e) => {
      let b=e.target.value;
      setPrice(b);
    }
    const changeImage = (e) => {
    let b=e.target.value;
        setImage(b);
      }
      const changeName = (e) => {
        let b=e.target.value;
        setName(b);
      }
      const changeQuantity = (e) => {
        let b=e.target.value;
        setQuantity(b);
      }
  return (
    <>
    <div className='container'>
        <form onSubmit={handleproduct}>
            <input type="file" id="file" onChange={changeImage} value={image}/>
            Name :<input type="name" value={name} onChange={changeName} />
            <br />
            Price:<input type="number" onChange={changePrice} value={price} />
            <br />
            Quantity:<input type="number" onChange={changeQuantity} value={quantity} />
            <br />
            <button type="submit">Add Product</button>
        </form>
    </div>
    </>
  )
}

export default Product