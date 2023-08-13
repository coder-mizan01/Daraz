import React from 'react'

import { GlobalCartHook } from '../Context/CartContext';



//css
import "../CSS/Cart.css";

//component
import CartItems from '../Component/CartItems';


const Cart = () => {
  const {Cart} = GlobalCartHook();
   console.log(Cart);
  return (
    <section>
        <div className="cart">
        <div className="cart-heading">
          <p className=''>photo</p>
          <p className="cart-price">Price</p>
          <p className='cart-quantity'>Quantity</p>
          <p className="cart-subtotal">Subtotal</p>
          <p>Delete</p>
 
        </div>

       <div className="cart-items">
          {Cart.map((curElm,index)=>{
            return <CartItems key={index} {...curElm} />
          })}
       </div>
        

        </div>
    </section>
  )
}

export default Cart