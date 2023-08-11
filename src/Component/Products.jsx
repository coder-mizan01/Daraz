import React from 'react';
import {Link} from "react-router-dom";
//css
import "../CSS/Products.css"

//Global Context
import { GlobalProductHook } from '../Context/ProductContext';

//icons 
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'

//image link - http://localhost:4000/api/v1/product/product-photo/${pro._id}

const Products = () => {

    const {products} = GlobalProductHook();
  return (
    <>
    <div className="products">
      {products?.map((pro) => {
        const {slug,description,price,_id} = pro
        return (
          <div className="product" key={_id}>
            <Link to={`/SingleProduct/${slug}`}>
              <img
                className="home-pro-img"
                src={``}
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
      })}
    </div>
    </>
  )
}

export default Products