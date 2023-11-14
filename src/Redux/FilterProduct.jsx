
 import { createSlice } from "@reduxjs/toolkit";

 const FilterProductSlice = createSlice({
    name : "filterproduct",
    initialState : {
       category_Wise_Products :[],
       lowestPrice : [],
       highestPrice : [],
       AtoZ_Product : [],
       ZtoA_Product : [],
       polobrandProduct:[],
    },

    reducers : {
      categoryWiseProductsAction:(state,action)=>{
        state.category_Wise_Products = [...action.payload];
      },
        LowestPriceProduct : (state,action) => {
           let products = action.payload; 
           state.category_Wise_Products = [...products].sort((a,b)=> a.price - b.price)
        },

        HighestPriceProduct : (state,action) =>{
          let products = action.payload;
          state.category_Wise_Products = [...products].sort((a,b)=> b.price - a.price)
        },

        ProductFromAtoZ : (state,action) => {
          let products = action.payload;
          state.category_Wise_Products = [...products].sort((a,b) => a.title.localeCompare(b.title))
        },

        ProductFromZtoA : (state,action) => {   
         let products = action.payload;
         state.category_Wise_Products  = [...products].sort((a,b)=> b.title.localeCompare(a.title));
        },

        polobrand :(state,action)=>{
         let products = action.payload;
         state.category_Wise_Products = [...products].filter((product)=> product.brand==='polo' )
        },

        nobrand:(state,action)=>{
          let products = action.payload;
          state.category_Wise_Products = [...products].filter((product)=> product.brand==='no-brand' )
        }
    }
 })

 export const {categoryWiseProductsAction,LowestPriceProduct , HighestPriceProduct , ProductFromAtoZ, ProductFromZtoA , polobrand,nobrand} = FilterProductSlice.actions;
 export default FilterProductSlice.reducer;