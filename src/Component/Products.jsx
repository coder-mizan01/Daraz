import React from 'react';
import config from "../config.json"

import {Link} from "react-router-dom";
//css
import "../CSS/Products.css"

//Global Hook
import { GlobalProductHook } from '../Context/ProductContext';
//import { GlobalCartHook } from '../Context/CartContext';



//component
import Spinner from './Spinner';
import AddToCart from "./AddToCart"


const Products = () => {

    const {products} = GlobalProductHook();
    let productQuantity = 1;

   

   
    
  return (
    <>
    <div className={products.length !== 0 ? 'products' : ''}>
      {products.length !== 0 ? products.map((pro) => {

        const {slug,description,price,_id} = pro  
        return (
          <div className="product" key={_id}>
            <Link to={`/SingleProduct/${slug}`}>
              <img
                className="home-pro-img"
                src={`${config.apiUrl}/api/v1/product/product-photo/${pro._id}`}
                alt=""
              />

            <div className="pro-content">
              <p className="desc" >{description.slice(0,39)}...</p>
            </div>
            </Link>
                          
            <div className="price-addcart">
                <p className='price'>Tk.{price}</p>
                <AddToCart product={pro} name={'+add'} quantity={productQuantity} />
            </div>
          </div>
        );
      }) : <Spinner /> }
    
    </div>
    </>
  )
}

export default Products