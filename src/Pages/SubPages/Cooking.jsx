
import React from 'react';
//global hook
import {GlobalProductHook} from "../../Context/ProductContext"
//components
import CategoryPage from '../../Component/CategoryPage';

const Cooking = () => {
   const {products} = GlobalProductHook();

   let CookingProducts = products.filter((pro)=>{
    return pro.subcategory === "cooking-indrigiants";
   })
  return (
    <>
    <CategoryPage products={CookingProducts} />
    </>
  )
}

export default Cooking