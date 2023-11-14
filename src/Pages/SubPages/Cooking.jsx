
import React from 'react';

import { useSelector } from 'react-redux';

//components
import CategoryPage from '../../Component/CategoryPage';

const Cooking = () => {

    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state)=> state.allproduct);
        
    //destructure property from object
    const {loading,products,error} = productsObj;
   
    //filter CookingProducts from products
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