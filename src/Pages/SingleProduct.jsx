import React, { useEffect, useState } from "react";
import { SingleProductGlobalContext } from "../Context/SingleProContext";
import { useParams } from "react-router-dom";

//css
import "../CSS/SingleProduct.css";

//icons
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';


//component
import Images from "../Component/Images";
import Quantity from "../Component/Quantity";
import Pagination from "../Component/Pagination";
import AddToCart from "../Component/AddToCart";

const API = "https://daraz-api.onrender.com/api/v1/product/get-product";

const SingleProduct = () => {
  const { slug } = useParams();
  const { SingleProduct, getSingleProduct } = SingleProductGlobalContext();

  useEffect(() => {
    getSingleProduct(`${API}/${slug}`);
    /* eslint-disable-next-line */
  }, []);

  //product quantity state
  const [productQuantity,setProductQuantity] = useState(1);


  const handleQuantity = (newproductQuantity) =>{
      setProductQuantity(newproductQuantity);
  }




  return (
    <>
      {SingleProduct !== undefined ? (
        <div id="Single-Product-Page">
          <Pagination Products={SingleProduct} />
          <div className="Single-Product">

            <div className="Images">
              <Images SingleProduct={SingleProduct} />
            </div>
            
            <div className="Single-Product-Details">
              <p className="description">{SingleProduct.description}</p>
              <p className="star"> <AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /><AiOutlineStar />  </p>
              <p className="brand"> brand: {SingleProduct.brand} | more product from {SingleProduct.brand}</p>
              <p className="discount-price">৳{SingleProduct.price}</p>
              <p className="price"> <del>৳ 210</del> -52%</p>
              <hr />
              <div className="quantity">
                 <p> Quantity : </p>  <Quantity onChange={handleQuantity} />
              </div>

              <div className="Single-Product-buttons">
                <AddToCart product={SingleProduct} quantity={productQuantity} />
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
