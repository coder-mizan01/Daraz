
import { createContext, useState,useContext  } from "react";
import axios from "axios";


const SingleProductContext = createContext();

const SingleProductContextProvider = ({children}) =>{
    const [SingleProduct , SetSingleProduct] = useState();

    const getSingleProduct = async (url) =>{
        try {
          const {data} = await axios.get(url);
          if(data.success){
            SetSingleProduct(data.singleProduct);
            console.log(data.singleProduct);
          }
        } catch (error) {
          console.log(error.message);
        }
      }

      return   <SingleProductContext.Provider value={{ SingleProduct, getSingleProduct }}>
      {children}
    </SingleProductContext.Provider>
}


//custom hook

const SingleProductGlobalContext = () =>{
  return useContext(SingleProductContext)
}


export {SingleProductGlobalContext,SingleProductContextProvider}
