import React from 'react'

//import packages
import axios from "axios";
import { useNavigate } from 'react-router-dom';

// Get the server's origin link from the config file
import config from "../../config.json"


//global hook
//import { GlobalProductHook } from '../../Context/ProductContext';

//css
import "../../CSS/AdminProducts.css"

import { useEffect } from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchAllProduct } from '../../Redux/AllProducts';


const Products = () => {

  //get the GlobalProductHook state
  //const  {products , setProducts} = GlobalProductHook();

  const productData = useSelector((state)=> state.allProduct)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchAllProduct()) 
  },[])
  console.log(productData);
    //obtain navigate function
   const navigate = useNavigate();
  

 // handleProductDelete function to delete product
 /*const handleProductDelete = async(id)=>{
  const confirmDelete = window.confirm("Are you sure you want to delte this product?")
  if(confirmDelete){
    try {
      const {data} = axios.delete(`${config.apiUrl}/api/v1/product/delete-product/${id}`);
      if(data.success){
        console.log('product is delete');
        setProducts();
      }
     } catch (error) {
       console.log(error);
     }
  }

 }*/
     

  return (
    <div className='admin-products' >
      {productData?.map((item)=>{

        const {_id,title,category,subcategory,brand} = item
        return <div className='admin-product'  key={_id} >

         <div className='image-part'>
         <img src={`${config.apiUrl}/api/v1/product/product-photo/${item._id}`} alt="" />
         </div>

         <div className="details">
          <h3>title: {title}</h3>

          <p>category: {category}</p>
          <p>sub-category: {subcategory}</p>
          <p>brand: {brand}</p>
          </div>

          <div className="action-butttons">
          <button className='delete-btn' >delete</button>
          <button className='edit-btn' 
          onClick={()=>navigate('/admin/dashboard/editproduct',{state : {item}})} 
          >
            Edit
          </button>
          
          </div>
        </div>
      })}
    </div>
  )
}

export default Products