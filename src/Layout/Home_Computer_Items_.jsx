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

const Home_Computer_Items = () => {

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
          slidesToScroll: 4,
          infinite: false,
          speed: 800,
          dots: false,
        },
      },
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          speed: 800,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 1,
          speed: 800,
          dots: false,
          infinite: true,
        },
      },
      {
       breakpoint : 670,
       settings: {
        slidesToShow : 2,
        slidesToScroll : 2,
        initialSlide : 1,
        speed: 800,
        dots : false,
        infinit : false,
       }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          speed: 800,
          dots: false,
          infinit : false,
        },
      },
      {
        breakpoint: 430,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800,
          dots: false,
          infinit : false,
        },
      },
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          speed: 800,
          dots: false,
          infinit:false,
        },
      },
    ],
  };
    

  
   //declare productquantity variable
   let productQuantity;

  const computer_item_Obj = useSelector((state)=> state.computer_products)

  //destructure computer obj
  let {loading,computer_items} = computer_item_Obj;
  
  //destructure category from computer items
  let {category} = computer_items[0] !== undefined && computer_items[0]

  //reverse the copy computer_items
 const reverse_with_slice = [...computer_items].reverse().slice(0,14);  

  return (
    <>
      <div className="slide-header">
         <h2>{category}</h2>
         <Link  to={`/${category}`} className="button buttontext">See All</Link>
      </div>

      <Slider {...settings} className="">
   
        {loading !== true  ? (
          reverse_with_slice.map((computer_item) => {
            const { title, slug, price, _id } = computer_item;
   
            return (
              <div key={_id} className="product">
                <Link to={`/SingleProduct/${slug}`}>
                  <div className="product-img">
                    <img
                      className="home-pro-img"
                      src={`${config.apiUrl}/api/product/product-photo/${computer_item._id}`}
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
                    product={computer_item}
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

export default Home_Computer_Items;
