import React from 'react';

import { useSelector } from "react-redux";
//components
import CategoryPage from '../../Component/CategoryPage';

const Tables = () => {

    //receive productsObj from allproducts by useSelector
    const productsObj = useSelector((state) => state.allproduct);

    //destructure property from object
    const { loading, products, error } = productsObj;

    
    //filet TableProducts from products
    let TablesProducts = products.filter((pro)=>{
        return pro.subcategory === "Table";
       })


  return (
    <>
   <CategoryPage products={TablesProducts} />
    </>
  )
}

export default Tables