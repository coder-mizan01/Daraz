import React from "react";

import { Link } from "react-router-dom";

//GlobalCartHook
import { GlobalCartHook } from "../Context/CartContext";

const AddToCart = ({product,quantity,name}) => {
   const {_id,price} = product;

   //use callback function to get arguments
   const {AddToCart} =GlobalCartHook();


  return (
    <>
      
      {/**/}<Link to='/cart'>
  <button className="add-to-cart" onClick={() => AddToCart(_id, price, product, quantity)}>{name}</button>

  </Link> 
    </>
  );
};

export default AddToCart;
