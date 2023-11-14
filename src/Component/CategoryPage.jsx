import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";

//css
import "../CSS/CategoryPage.css";

//icons
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

//component
import Pagination from "./Pagination";
import SideFilters from "./SideFilters";


import { useDispatch ,useSelector } from "react-redux";
import { LowestPriceProduct , HighestPriceProduct, ProductFromAtoZ, ProductFromZtoA  ,categoryWiseProductsAction} from "../Redux/FilterProduct";
const CategoryPage = ({ products }) => {
  const copyProducts = [...products];
  let SingleProduct = copyProducts[0];


  const demo = useSelector((state)=> state.filterproduct)
  const {category_Wise_Products} = demo;
  


 
  const dispatch = useDispatch();
  useEffect(()=>{
     dispatch(categoryWiseProductsAction(products))
  },[products])


const [selectedOption , setSelectedOption] = useState("");
 const handlePriceChange = (e,product) => {
  let selectedValue = e.target.value;
  setSelectedOption(selectedValue) 
    if(selectedValue==="highest"){
      dispatch(HighestPriceProduct(product))
    } if(selectedValue === "lowest"){
      dispatch(LowestPriceProduct(product)) 
    } if(selectedValue === "A-Z"){
      dispatch(ProductFromAtoZ(product))
    } if(selectedValue === "Z-A"){
      dispatch(ProductFromZtoA(product))
    }
 }




  return (  
    <>
      <div className="category_page_container">

        <SideFilters products={products} /> 


        <div className="category_page">

        <div className="category_page_topbar">
        <Pagination Products={SingleProduct}  />
        <select name="" id=""  onChange={(e)=>{handlePriceChange(e,category_Wise_Products)}} >
            <option value="">sort by: Feautured</option>
            <option value="A-Z">Product (A-Z)</option>
            <option value="Z-A">Product (Z-A)</option>
            <option value="highest" >Price (highest-lowest)</option>
            <option value="lowest">Price (lowest-highest) </option>
          </select>
      </div>

       <div className="category_page_products">
 
      

          {category_Wise_Products?.map((pro) => {
            const {title, slug, price, _id } = pro;

            return (
              <div className="pro" key={_id}>
                <Link to={`/SingleProduct/${slug}`}>
                  <img
                    className="category_pro_img"
                    src={`https://daraz-api.onrender.com/api/v1/product/product-photo/${pro._id}`}
                    alt=""
                  />

                  <div className="category_pro-content">
                    <p className="title">{title}</p>
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
      </div>
    </>
  );
};

export default CategoryPage;
