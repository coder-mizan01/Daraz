import React from 'react';

//icons
import {FaTrash} from "react-icons/fa";

//global Cart Hook
import { GlobalCartHook } from '../Context/CartContext';

const CartItems = ({_id,price,quantity}) => {
    const {DeleteToCart} = GlobalCartHook();
  return (
    <>
          <div className='cart-heading'> 
          <img src={`http://localhost:4000/api/v1/product/product-photo/${_id}`} alt="" />
          <p>{price}</p>
          <p>{quantity}</p>
          <p>{price*quantity}</p>
          <p><FaTrash  onClick={()=>{DeleteToCart(_id)}} /></p>
          </div>
    </>
  )
}

export default CartItems