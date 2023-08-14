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
          <img src={`https://daraz-api.onrender.com/api/v1/product/product-photo/${_id}`} alt="" />
          <p>{price}</p>
          <p className='cart-price'>{quantity}</p>
          <p className='detele-icon'><FaTrash  onClick={()=>{DeleteToCart(_id)}} /></p>
          <p>{price*quantity}</p>

          </div>


    </>
  )
}

export default CartItems