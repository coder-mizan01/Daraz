import React from 'react';

import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Charger = () => {
    
  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state) => state.allproduct);

  //destructure property from object
  const { loading, products, error } = productsObj;

  //filter smartphonesProducts from products
   let SmartphonesProducts = products.filter((pro)=>{
    return pro.subcategory === "computer-accessories";
   })
  return (
    <>
<CategoryPage products={SmartphonesProducts} />
    </>
  )
}

export default Charger