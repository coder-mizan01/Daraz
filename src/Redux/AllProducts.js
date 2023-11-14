
 import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../config.json"


 export const fetchAllProduct = createAsyncThunk("allproduct/fetchAllProduct", async () => {
    const res = await axios.get(`${config.apiUrl}/api/v1/product/get-product`);
    return res.data.products;
 });


 const ProductSlice = createSlice({
    name : 'allproduct',
    initialState :  {
        loading : false,
        products : [],
        error : null,
    },

   
   extraReducers : (builder) =>  {

      builder.addCase(fetchAllProduct.pending,(state)=>{
         state.loading = true
      });

      builder.addCase(fetchAllProduct.fulfilled,(state,action)=> {
         state.loading = false;
         state.products = action.payload;
      });

      builder.addCase(fetchAllProduct.rejected,(state,action)=>{
         state.loading = false;
         state.products = [];
         state.error = action.payload.error;

      })

   }

 })


  export default ProductSlice.reducer