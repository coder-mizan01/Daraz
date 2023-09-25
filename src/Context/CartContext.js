import { createContext, useContext, useReducer } from "react";

//reducer
import CartReducer from "../Reducer/CartReducer";


 const CartContext = createContext();

 //initialState for reducer

 const initialState = {
    Cart : [],
    shipping : ''
 }

 const CartContextProvider = ({children}) => {

    //create a reducer 
    const [state,dispatch] = useReducer(CartReducer,initialState);

 
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
 
