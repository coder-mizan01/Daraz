import React from "react";
import {Link} from "react-router-dom";

import { GlobalCartHook } from "../Context/CartContext";

//css
import "../CSS/Cart.css";

//component
import CartItems from "../Component/CartItems";

const Cart = () => {
  const { Cart } = GlobalCartHook();
  console.log(Cart.length);
  //set the shipping charge
  const Shipping = 50;

  //calculate the total price
  let totalprice = 0;
  Cart.forEach((curElm) => {
    totalprice += curElm.price * curElm.quantity;
  });

  return (
    <>
      {Cart.length === 0 ? (
          <>
          <div  className="empty-cart-div">
          <img src="icon_empty_cart.png" alt="" />
          <h1 >Cart is empty</h1>
          <Link to='/'>please go for shopping</Link>
        </div>
          </>
      ) : (
        <div className="cart">
          <div className="cart-heading">
            <p className="">photo</p>
            <p className="cart-price">Price</p>
            <p className="cart-quantity">Quantity</p>
            <p>Delete</p>
            <p className="cart-subtotal">Subtotal</p>
          </div>

          <div className="cart-items">
            {Cart.map((curElm, index) => {
              return <CartItems key={index} {...curElm} />;
            })}
          </div>

          <div className="cart-total-value">
            <div className="cart-total">
              <div className="SubTotal">SubTotal : {totalprice}</div>
              <div className="shipping">Shipping : {Shipping}</div>
              <div className="total"> total :{totalprice + Shipping}</div>
            </div>
          </div>

          
        </div>
      )}
    </>
  );
};

export default Cart;
