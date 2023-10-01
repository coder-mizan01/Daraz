import React from 'react'
import axios from "axios";
import config from "../../config.json"


import { GlobalProductHook } from '../../Context/ProductContext';

const Products = () => {

  const  {products , setProducts} = GlobalProductHook();


 const handleProductDelete = async(id)=>{
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
//       

  return (
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr'}}>
      {products?.map((item)=>{
        return <React.Fragment  key={item._id} >
         <div className='' style={{background:'#ccc', width:"15rem",height:'auto', margin:"10px",display:'flex',flexDirection:'column'}} >
          <img src={`${config.apiUrl}/api/v1/product/product-photo/${item._id}`} alt="" />
          <p>{item._id}</p>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <a href="/">{item.category}</a>
          <a href="/">{item.subcategory}</a>
          <p>{item.brand}</p>
          <p>{item.slug}</p>
          <button onClick={()=>handleProductDelete(item._id)}>delete</button>
        </div>
        </React.Fragment>
      })}
    </div>
  )
}

export default Products