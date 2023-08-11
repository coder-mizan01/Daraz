import React from 'react';
//global hook
import {GlobalProductHook} from "../../Context/ProductContext"
//components
import CategoryPage from '../../Component/CategoryPage';

const Traditionwears = () => {
   const {products} = GlobalProductHook();

   let ChocoLatesProducts = products.filter((pro)=>{
    return pro.subcategory === "traditional-wear";
   })
   console.log(ChocoLatesProducts);
  return (
    <>
    <CategoryPage products={ChocoLatesProducts} />
    </>
  )
}

export default Traditionwears

