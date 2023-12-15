import React from 'react';

import { useSelector } from "react-redux";
//components
import CategoryPage from '../../Component/CategoryPage';

const Traditionwears = () => {

    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state) => state.allproduct);

    //destructure property from object
    const { loading, products, error } = productsObj;

   //filter chocolateproduct from products 
   let TraditionClothproducts = products.filter((pro)=>{
    return pro.subcategory === "traditional-wear";
   })

   console.log(TraditionClothproducts);
  return (
    <>
    <CategoryPage products={TraditionClothproducts} />
    </>
  )
}

export default Traditionwears

