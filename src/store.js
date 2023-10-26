 
  import { configureStore } from "@reduxjs/toolkit";


  //authentication file 

  import Authentication from "./Redux/Authentication"


  const store = configureStore({
    reducer : {
        authentication : Authentication
    }
  })

  export default store