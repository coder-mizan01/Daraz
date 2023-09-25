import { createContext , useContext, useReducer } from "react";

 //Reducer
 import FilterReducer from "../Reducer/FilterReducer";


 const initialState = {
    lowest : [],
    highest : [],
 }

 const FilterContext = createContext();

  const FilterContextProvider = ({children}) => {
    
    //create a reducer
    const [state,dispatch] = useReducer(FilterReducer,initialState)

   const changePriceRange = (e,products) => {
       dispatch({type:e.target.value,payload:products})
   }


     return <FilterContext.Provider value={{...state,changePriceRange}}>
           {children}
     </FilterContext.Provider>
  }


  //GlobalHook

  const GlobalFilterHook = () => {
     return useContext(FilterContext)
  }


 
export {FilterContextProvider,GlobalFilterHook}