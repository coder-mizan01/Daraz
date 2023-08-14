

const CartReducer = (state,action) => {

 if(action.type === 'ADD_TO_CART'){

  let {_id,price,product,quantity} = action.payload;
  let CartItems;

  CartItems = {
    _id,
    price,
    quantity,
    title : product.title,
  }
  return {
    ...state,
    Cart : [...state.Cart,CartItems]
  }
 }

 

 if(action.type === "DELETE_TO_CART"){
  let updatedCart;

  updatedCart = state.Cart.filter((item)=> item._id !== action.payload )
  return {
    ...state,
    Cart: updatedCart
  }

 }
  return state

}

export default CartReducer