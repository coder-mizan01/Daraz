import React, { useEffect, useState } from "react";
import config from "../config.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


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
import Spinner from "../Component/Spinner";
  
const SingleProduct = () => {

  const API = `${config.apiUrl}/api/product/get-product`;
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

  //check if the single product is not null then destructure the SingleProduct object
  if(SingleProduct !== null){
    var {_id,title,specification_property,specification_value,subcategory,subcategory,category,price,brand,quantity} = SingleProduct;
  }


  return (
    <>
    {loading ? <Spinner /> : 
    <div id="Single-Product-Page">
          <div className="Single-Product">
            <Images id={_id} />

            <div className="Single-Product-Details">
              <p className="title">{title}</p>
              <p className="brand">
                {" "}
                brand: {brand} | more product from{" "}

              </p>
              <p>see more: <Link to={`/${category}/${subcategory}`}>{category }||{ subcategory}</Link></p>

              <p> in stock : {quantity} pice</p>
            <p className="star">
                {" "}
                <AiFillStar />
                <AiFillStar /> <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />{" "}
              </p>
              <p className="discount-price">$ {price}</p>

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
                  product={{_id,title,subcategory,category,price,brand,quantity}}
                  quantity={QuantityofProduct}
                  name={"Add To Cart"}
                />
                )
               }
              </div>
            </div>
          </div>
        </div> }

    </>
  );
};

export default SingleProduct;
