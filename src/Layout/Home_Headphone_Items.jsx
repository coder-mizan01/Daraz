import React from "react";
import { Link } from "react-router-dom";

import config from "../config.json";

import Slider from "react-slick";

//css
import "../CSS/Products.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//component
import AddToCart from "../Component/AddToCart";

//icons
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons'

//
import { useSelector } from "react-redux";
import Spinner from "../Component/Spinner";

const Headphone_Items = () => {
  
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state)=> state.allproduct);

  //destructure property from object
   const {loading , products , error} = productsObj;

  let productQuantity;

  //filter electronics products
  let headphone_items;
  headphone_items = products.filter((pro) => {
    return pro.category === "headphone_items" ;
  });

  

  //make custone next arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsArrowRightShort
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  //make custom prev arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <BsArrowLeftShort
        className={className}
        style={{ ...style }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: false,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1115,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          infinite: true,
        },
      },
      {
       breakpoint : 670,
       settings: {
        slidesToShow : 2,
        slidesToScroll : 1,
        initialSlide : 1,
        dots : false,
        infinit : true,
       }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          infinit : true,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinit : true,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          infinit:true,
        },
      },
    ],
  };

  return (
    <>
      <div className="slide-header">
         <h2>{headphone_items[0] !== undefined && headphone_items[0].category}</h2>
         <Link className="button buttontext">See All</Link>
      </div>

      <Slider {...settings} className="">
   
        {headphone_items.length > 0 ? (
          headphone_items.slice(0,14).map((pro) => {
            const { title, slug, price, _id } = pro;
   
            return (
              <div key={_id} className="product">
                <Link to={`/SingleProduct/${slug}`}>
                  <div className="product-img">
                    <img
                      className="home-pro-img"
                      src={`${config.apiUrl}/api/product/product-photo/${pro._id}`}
                      alt=""
                    />
                  </div>

                  <div className="pro-content">
                    <p className="title">{title.slice(0, 18)}..</p>
                    <p className='rating'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /> <FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfStroke} /></p> 
                  </div>
                </Link>

                <div className="addcart">
                  <p className="price">Tk.{price}</p>
                  <AddToCart
                    product={pro}
                    name={"+add"}
                    quantity={productQuantity}
                  />

                </div>
              </div>
            );
          })
        ) : (
          <Spinner />
        )}
      </Slider>


    </>
  );
};

export default Headphone_Items;
