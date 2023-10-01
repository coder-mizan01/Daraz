import React from 'react';

//global hook
import {GlobalProductHook} from "../../Context/ProductContext";

//components
import CategoryPage from '../../Component/CategoryPage';

const Tables = () => {

    
    const {products} = GlobalProductHook();

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