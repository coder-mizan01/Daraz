import { createContext, useContext, useReducer,useEffect } from "react";

//reducer
import CartReducer from "../Reducer/CartReducer";


 const CartContext = createContext();

 //initialState for reducer

 const initialState = {
   Cart : JSON.parse(localStorage.getItem('cart')) || [],
   shipping: ""
 };

 const CartContextProvider = ({children}) => {
  

    //create a reducer 
    const [state,dispatch] = useReducer(CartReducer,initialState);

    

      // Save cart data to localStorage whenever it changes 
     useEffect(()=>{
       localStorage.setItem('cart',JSON.stringify(state.Cart))
     },[state.Cart])
 
    const AddToCart = (_id,price,product,quantity) =>{
         dispatch({type : 'ADD_TO_CART',payload:{_id,price,product,quantity}})
        
    }

    const DeleteToCart = (_id) =>{
      dispatch({type:"DELETE_TO_CART",payload:_id})
    }
    
   return <CartContext.Provider value={{...state,AddToCart,DeleteToCart}}>
         {children}
   </CartContext.Provider>
 }

 //create Global cart hook

 const GlobalCartHook = () => {
    return useContext(CartContext);
 }

 export {CartContextProvider,GlobalCartHook}
 
