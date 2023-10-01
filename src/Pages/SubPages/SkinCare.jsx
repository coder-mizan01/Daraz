import React from 'react';


//global hook
import {GlobalProductHook} from "../../Context/ProductContext";

//components
import CategoryPage from '../../Component/CategoryPage';

const SkinCare = () => {

    const {products} = GlobalProductHook();

    let SkinCareProducts = products.filter((pro)=>{
        return pro.subcategory === "skin-care";
       })


  return (
    <>
     <CategoryPage  products={SkinCareProducts} />
    </>
  )
}

export default SkinCare