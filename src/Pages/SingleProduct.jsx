import React, { useEffect, useState } from "react";
import { SingleProductGlobalContext } from "../Context/SingleProContext";
import { useParams } from "react-router-dom";

//css
import "../CSS/SingleProduct.css";

//icons
import {AiFillStar,AiOutlineStar,AiOutlineHeart} from 'react-icons/ai';
import {IoLocationOutline} from "react-icons/io5";
import {FaHandsHelping} from "react-icons/fa";
import {TbTruckDelivery}from "react-icons/tb";
import {GrMoney} from "react-icons/gr";
import {MdOutlineLocalOffer} from "react-icons/md";

//images
import shopnow from "../Images/shopnow.jpg"

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
              <p className="star"> <AiFillStar /><AiFillStar /> <AiFillStar /><AiFillStar /><AiOutlineStar /> <span>74 ratings</span> <span><AiOutlineHeart /></span>  </p>
              <p className="brand"> brand: {SingleProduct.brand} | more product from {SingleProduct.brand}</p>
              <img src={shopnow} alt="dasdasda" className="img-fluid" />
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

            <div className="other-Information">

            <div className="address">
            <p>     <IoLocationOutline />  House : 122/51 , Modinabag , mugda Dhaka - 1214</p>
              </div>
              <hr />

              <div className="cod">
                <p> <FaHandsHelping /> Available Cod Delivey </p>
              </div>
              <hr />
              <div className="free-delivery">
                <p><MdOutlineLocalOffer/> use DARAZBEST To Get 5% Discount</p>
              </div>

              <hr />
              <div className="show-offer">
                  <p> <TbTruckDelivery /> Get The Fastest Delivery </p>
              </div>
              <hr />
              <div className="daraz-points">
                  <p> <GrMoney /> Available Daraz point to shop more </p>
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
