import { createContext, useReducer,useContext } from "react";

import { GlobalProductHook } from "./ProductContext";

//reducer
import reducer from "../Reducer/Reducer";

const FilterContext = createContext();

const initialState = {
    filterProducts : [],
}

const FilterContextProvider = ({children}) => {

    const {products} = GlobalProductHook();


    const [state,dispatch] = useReducer(reducer,initialState);

    const Sorting = (value) => {
        dispatch({ type: 'filter', payload: value });
      };



  return (
    <>
   <FilterContext.Provider value={{...state,Sorting}}>
        {children}
   </FilterContext.Provider>
    </>
  )

}


const GlobalFilterProductHook = () => {
    return useContext(FilterContext);
}


export  {FilterContextProvider,GlobalFilterProductHook}