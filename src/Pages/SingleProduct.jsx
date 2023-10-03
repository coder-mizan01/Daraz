import React, { useEffect, useState } from "react";
import config from "../config.json";
import { SingleProductGlobalContext } from "../Context/SingleProContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

//global hooks
import { GlobalCartHook } from "../Context/CartContext";

//css
import "../CSS/SingleProduct.css";

//icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//component
import Images from "../Component/Images";
import Quantity from "../Component/Quantity";
import Pagination from "../Component/Pagination";
import AddToCart from "../Component/AddToCart";

const API = `${config.apiUrl}/api/v1/product/get-product`;

const SingleProduct = () => {
  const { slug } = useParams();
  const { SingleProduct, getSingleProduct } = SingleProductGlobalContext();

  useEffect(() => {
    getSingleProduct(`${API}/${slug}`);
    /* eslint-disable-next-line */
  }, []);

  //product quantity state
  const [productQuantity, setProductQuantity] = useState(1);

  const handleQuantity = (newproductQuantity) => {
    setProductQuantity(newproductQuantity);
  };
   
  //get the cart value
  const { Cart } = GlobalCartHook();

  const [productInCart,setProductinCart] = useState(false)

  // Check if the current single product is in the cart 
   useEffect(()=>{
    if(SingleProduct){
      let isProductInCart = Cart.some((item) => item._id === SingleProduct._id);
      setProductinCart(isProductInCart)
    }

   },[SingleProduct,Cart])
 

   console.log(Cart);
   console.log(productInCart);

  return (
    <>
      {SingleProduct !== undefined ? (
        <div id="Single-Product-Page">
          <Pagination Products={SingleProduct} />
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
                <p> Quantity : </p> <Quantity onChange={handleQuantity} />
              </div>

              <div className="Single-Product-buttons">

                {productInCart ? <Link to='/cart'><button className="add-to-cart">Go to Cart</button></Link> :<AddToCart
                    product={SingleProduct}
                    quantity={productQuantity}
                    name={"Add TO Cart"}
                  /> }

        
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
