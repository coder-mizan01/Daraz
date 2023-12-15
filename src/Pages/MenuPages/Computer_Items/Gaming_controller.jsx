import React from 'react';
import { useSelector } from "react-redux";

//components
import CategoryPage from '../../../Component/CategoryPage';

const Gaming_controller = () => {
      //receive productsObj from allproducts by useSelector
      const productsObj = useSelector((state) => state.allproduct);

      //destructure property from object
      const { loading, products, error } = productsObj;
    
      //filter mouse from products
       let gaming_controller = products.filter((pro)=>{
        return pro.subcategory === "gaming_controller";
       })
  return (
    <>
    <CategoryPage products={gaming_controller} />
       </>
  )
}

export default Gaming_controller