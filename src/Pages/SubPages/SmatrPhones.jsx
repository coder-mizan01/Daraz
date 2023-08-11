import React from 'react';
//global hook
import {GlobalProductHook} from "../../Context/ProductContext"
//components
import CategoryPage from '../../Component/CategoryPage';

const SmatrPhones = () => {
   const {products} = GlobalProductHook();

   let SmartphonesProducts = products.filter((pro)=>{
    return pro.subcategory === "computer-accessories";
   })
  return (
    <>
    <CategoryPage products={SmartphonesProducts} />
    </>
  )
}


export default SmatrPhones