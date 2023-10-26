/*

import { createContext, useContext, useState , useEffect } from "react";
import axios from "axios";
const AuthContext = createContext();



const AuthContextProvider = ({children}) =>{


const [state, setState] = useState({ user: null, token: null});

  //set default axios headers authorization 
  axios.defaults.headers.common['Authorization'] = state.token;


useEffect(()=>{
  const data = localStorage.getItem("auth");
  if(data){
  const stringyData = JSON.parse(data);
   setState({
    ...state,
    user : stringyData.user,
    token : stringyData.token
   })
  }
  //eslint-disable-next-line
},[])

    return <AuthContext.Provider value={[state,setState]}>
           {children}
    </AuthContext.Provider>
}

  
//global hook

const GlobalAuthHook = () => useContext(AuthContext);


export {AuthContextProvider , GlobalAuthHook}

*/