
 import { createSlice } from "@reduxjs/toolkit";

 const CartSlice = createSlice({
    name : 'cart',
    initialState : {
    Cart : [],
    shipping : '',
    },

    reducers : {
        AddtoCart : (state,action) => {

            let {_id,price,product,quantity,title} = action.payload;
            let CartItems;
          
            CartItems = { 
              _id,
              price,
              quantity,
              title
            }
            
             state.Cart = [...state.Cart,CartItems];
            

        },

        DeleteToCart : (state,action) => {
            let updatedCart;
            updatedCart = state.Cart.filter((item)=> item._id !== action.payload)
            state.Cart = updatedCart;
        },
    }
 })

 export const {AddtoCart , DeleteToCart} = CartSlice.actions 

 export default CartSlice.reducer;