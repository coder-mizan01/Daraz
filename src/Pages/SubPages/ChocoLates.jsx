import React from 'react';

//components
import CategoryPage from '../../Component/CategoryPage';

//
import { useSelector} from 'react-redux';

const ChocoLates = () => {

  //receive productsObj from allproducts by useSelector
  const productsObj = useSelector((state)=> state.allproduct);
    
  //destructure property from object
   const {loading , products , error} = productsObj;
  
   //filter cloths products from allproducts
   let ChocoLatesProducts = products.filter((pro)=>{
    return pro.subcategory === "chocolate-candy";
   });

  return (
    <>
    <CategoryPage products={ChocoLatesProducts} />
    </>
  )
}

export default ChocoLates