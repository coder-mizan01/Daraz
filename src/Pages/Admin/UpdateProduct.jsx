import React, { useState } from 'react';
import axios from 'axios';
import config from "../../config.json"
//css
import "../../CSS/UpdateProduct.css"

const UpdateProduct = () => {
  const [id, setId] = useState("");
  const [category, setCategory] = useState("");
  const [subcategory, setSubCategory] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  //const [photo, setPhoto] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [quantity, setQuantity] = useState("");


  console.log(title);
  const handleUpdateProduct = async () => {
    try {
      // Create an object with the updated product data
      const updatedProductData = {
        category,
        subcategory,
        title,
        description,
        price,
        brand,
        quantity
      };

      // Make an HTTP request to your backend route to update the product
      const response = await axios.put(`${config.apiUrl}/api/v1/product/update-product/${id}`, updatedProductData);

      if (response.status === 201) {
        // Handle a successful update (you can show a success message or redirect)
        console.log("Product updated successfully");
      } else {
        // Handle errors if the update was not successful
        console.error("Product update failed");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };



  return (

    <>
      <div className='id-div'>
        <input type="text" placeholder='write product id' 
        onChange={(e) => setId(e.target.value)}
        value={id} required
        />
      </div>


      <div className='category-div'>
      <input type="text" placeholder='write category' 
      onChange={(e) => setCategory(e.target.value)} 
      value={category} required />

      </div>

      <div className='subcategory-div'>
        <input type="text" placeholder='write subcategory' 
        onChange={(e) => setSubCategory(e.target.value)} value={subcategory}  required/>
      </div>

      <div className='brand-div'>
        <input type="text" placeholder='write brand' 
        onChange={(e) => setBrand(e.target.value)} value={brand} required />
      </div>

      <div className='title-div'>
        <input type="text" placeholder='write title' 
        onChange={(e) => setTitle(e.target.value)} value={title} required />
      </div>

      <div className='description-div'>
        <input type="text" placeholder='write description' 
        onChange={(e) => setDescription(e.target.value)} value={description} required />
      </div>

      <div className='price-div'>
        <input type="number" placeholder='write price' 
        onChange={(e) => setPrice(e.target.value)} value={price} required />
      </div>

      <div className='quantity-div'>
        <input type="number" placeholder='write quantity' 
        onChange={(e) => setQuantity(e.target.value)} value={quantity} required />
      </div>

      <div className='update-btn'>
        <button onClick={handleUpdateProduct} >update</button>
      </div>

    </>

  )
}

export default UpdateProduct