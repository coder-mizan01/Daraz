import React from 'react';
import {Link} from "react-router-dom";
//css
import "../CSS/Products.css"

//Global Context
import { GlobalProductHook } from '../Context/ProductContext';



//component
import Spinner from './Spinner';
import AddToCart from "./AddToCart"


const Products = () => {

    const {products} = GlobalProductHook();
    let productQuantity = 1;

    console.log(products);
    
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
                src={`https://daraz-api.onrender.com/api/v1/product/product-photo/${pro._id}`}
                alt=""
              />

            <div className="pro-content">
              <p className="desc" >{description.slice(0,39)}...</p>
              <div className="price-addcart">
                <p className='price'>{price}</p>
                <AddToCart product={pro} name={'+add'} quantity={productQuantity} />
              </div>
              
            </div>
            </Link>
          </div>
        );
      }) : <Spinner /> }
    
    </div>
    </>
  )
}

export default Products