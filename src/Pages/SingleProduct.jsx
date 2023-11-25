import React, { useEffect, useState } from "react";
import config from "../config.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//global hooks
//import { GlobalCartHook } from "../Context/CartContext";

//css
import "../CSS/SingleProduct.css";

//icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//component
import Images from "../Component/Images";
import Quantity from "../Component/Quantity";
import AddToCart from "../Component/AddToCart";

//redux
import { useSelector, useDispatch } from "react-redux";
import { getSingleProduct } from "../Redux/SingleProduct";

const SingleProduct = () => {

  const API = `${config.apiUrl}/api/v1/product/get-product`;
  const { slug } = useParams();


  const SingleProductObj = useSelector((state) => state.singleproduct);
  const { loading, SingleProduct, error } = SingleProductObj;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getSingleProduct(`${API}/${slug}`));
    /* eslint-disable-next-line */
  }, []);


  //product quantity state
  const QuantityofProduct = useSelector((state)=> state.productquantitycounter.count)

  //get the cart value 
  const Cart = useSelector((state)=> state.cart.Cart);


  //get the cart value
  const [productInCart, setProductinCart] = useState(false);  


  // Check if the current single product is in the cart or not
  useEffect(() => {
    if (SingleProduct) {
      let isProductInCart = Cart.some((item) => item._id === SingleProduct._id);
      setProductinCart(isProductInCart);
    }
  }, [SingleProduct, Cart])

  return (
    <>
      {SingleProduct !== null ? (
        <div id="Single-Product-Page">
          <div className="Single-Product">
            <Images SingleProduct={SingleProduct} />

            <div className="Single-Product-Details">
              <p className="title">{SingleProduct.title}</p>
              <p className="brand">
                {" "}
                brand: {SingleProduct.brand} | more product from{" "}
                {SingleProduct.brand}
              </p>
              <p className="sub-category">
                {" "}
                category : <Link to="/">{SingleProduct.category}</Link>
              </p>
              <p> in stock : {SingleProduct.quantity} pice</p>
              <p className="star">
                {" "}
                <AiFillStar />
                <AiFillStar /> <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />{" "}
              </p>
              <p className="discount-price">TK. {SingleProduct.price}</p>
              <p className="price">
                {" "}
                <del> 210</del> -52%
              </p>
              <hr />
              <div className="quantity">
                <p> Quantity : </p> <Quantity />
              </div>

              <div className="Single-Product-buttons">
                {productInCart ? (
                  <Link to="/cart">
                    <button className="add-to-cart">Go to Cart</button>
                  </Link>
                ) : (
                  <AddToCart 
                  product={SingleProduct}
                  quantity={QuantityofProduct}
                  name={"Add TO Cart"}
                />
                )
               }
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>..Loading</p>
      )}
    </>
  );
};

export default SingleProduct;
