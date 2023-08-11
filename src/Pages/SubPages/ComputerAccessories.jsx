import React from 'react';
//global hook
import {GlobalProductHook} from "../../Context/ProductContext"
//components
import CategoryPage from '../../Component/CategoryPage';

const ComputerAccessories = () => {
   const {products} = GlobalProductHook();

   let ComputerAccessoriesProducts = products.filter((pro)=>{
    return pro.subcategory === "computer-accessories";
   })
  return (
    <>
    <CategoryPage products={ComputerAccessoriesProducts} />
    </>
  )
}

export default ComputerAccessories