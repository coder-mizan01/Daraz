import React from 'react';

import { useSelector } from "react-redux";
//components
import CategoryPage from '../../Component/CategoryPage';

const WesternWears = () => {

    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state) => state.allproduct);

    //destructure property from object
    const { loading, products, error } = productsObj;

   let WesternClothproducts = products.filter((pro)=>{
    return pro.subcategory === "western-wear";
   })
   console.log(WesternClothproducts);
  return (
    <>
    <CategoryPage products={WesternClothproducts} />
    </>
  )
}

export default WesternWears

