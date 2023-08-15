import React from "react";
import { Link } from "react-router-dom";

//css
import "../CSS/CategoryPage.css";

//icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
//component
import Pagination from "./Pagination";
import SideFilters from "./SideFilters";


const CategoryPage = ({ products }) => {
  const copyProducts = [...products];
  let SingleProduct;
  SingleProduct = copyProducts[0];
  console.log(SingleProduct);

  return (
    <>
      <div className="top-filter">
  
          <Pagination Products={SingleProduct} />

        <select name="" id="">
          <option value="highest">Price (lowest-highest)</option>
          <option value="lowest">Price (highest-lowest)</option>
        </select>
      </div>

      <div className="category-page">

        <div className="side-filter">
         <SideFilters products={products} />
        </div>

        <div className="products-section">
          {products?.map((pro) => {
            const { slug, description, price, _id } = pro;

            return (
              <div className="product" key={_id}>
                <Link to={`/SingleProduct/${slug}`}>
                  <img
                    className="home-pro-img"
                    src={`https://daraz-api.onrender.com/api/v1/product/product-photo/${pro._id}`}
                    alt=""
                  />

                  <div className="pro-content">
                    <p className="desc">{description}</p>
                    <p className="price">৳{price}</p>
                    <p className="star">
                      {" "}
                      <AiFillStar />
                      <AiFillStar /> <AiFillStar />
                      <AiFillStar />
                      <AiOutlineStar /> <span>(167)</span>
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
