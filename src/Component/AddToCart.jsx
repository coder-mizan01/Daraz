import React from "react";

import { Link } from "react-router-dom";

//GlobalCartHook
import { GlobalCartHook } from "../Context/CartContext";

const AddToCart = ({product,quantity}) => {
   const {_id,price} = product;
  console.log(quantity);

   //use callback function to get arguments
   const {AddToCart} =GlobalCartHook();

   const setAlert  = () =>{
    alert('please click on the add to cart button')
   }

  return (
    <>
    <Link >
      <button className="buy-now" onClick={setAlert} >Buy Now</button>
      </Link>

      <Link to=''>
      <button className="add-to-cart" onClick={()=>AddToCart(_id,price,product,quantity)}>Add To Cart</button>
      </Link>
    </>
  );
};

export default AddToCart;
