
import { createContext, useContext, useState , useEffect } from "react";

import axios  from "axios";

const ProductContext = createContext();




const ProductContextProvider = ({children}) => {
    const [products , setProducts] = useState([]);

    const getAllProducts = async() =>{
        try {
         const {data} = await axios.get("https://daraz-api.onrender.com/api/v1/product/get-product");
         if(data.success){
            setProducts(data.products);
           console.log('success');
           
         }
        } catch (error) {
         console.log(error.message);
        }
      }

  
     useEffect(()=>{
        getAllProducts()
      },[])

  return (
    <ProductContext.Provider value={{products , setProducts}}>
        {children}
    </ProductContext.Provider>
  )
}

// Global product Hook
 
const GlobalProductHook = () => useContext(ProductContext)

export {ProductContextProvider , GlobalProductHook};