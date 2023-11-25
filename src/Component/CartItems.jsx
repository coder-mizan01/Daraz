import React from 'react';

//icons
import {FaTrash} from "react-icons/fa";


import { DeleteFromCart } from '../Redux/CartItem';
import { useDispatch } from 'react-redux';

const CartItems = ({_id,price,quantity}) => {

  const dispatch = useDispatch();
  const handleDelete = () => {
  dispatch(DeleteFromCart(_id))
  }
  return (
    <>
          <div className='cart-heading'> 
          <img src={`https://daraz-api.onrender.com/api/v1/product/product-photo/${_id}`} alt="" />
          <p>{price}</p>
          <p className='cart-price'>{quantity}</p>
          <p className='detele-icon'><FaTrash  onClick={handleDelete}  /></p>
          <p>{price*quantity}</p>

          </div>


    </>
  )
}

export default CartItems