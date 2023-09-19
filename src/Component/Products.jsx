import React from 'react';
import {Link} from "react-router-dom";
//css
import "../CSS/Products.css"

//Global Context
import { GlobalProductHook } from '../Context/ProductContext';

//icons 
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';

//component
import Spinner from './Spinner';


const Products = () => {

    const {products} = GlobalProductHook();
    
  return (
    <>
    <div className="products">
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
              <p className="desc">{description}</p>
              <p className="price">৳{price}</p>
              <p className="star"> <AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /><AiOutlineStar /> <span>(167)</span></p>
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