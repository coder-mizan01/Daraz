
import React, { useEffect, useState } from 'react';
import config from "../config.json"
import Dashboard from "../Pages/User/Dashboard"
//import Spinner from '../Component/Spinner';
import Login from "../Pages/auth/Login"
import axios from 'axios';

//global Hook
import { GlobalAuthHook } from '../Context/authContext'

const PrivateRouter = () => {
    const [ok ,setOk]= useState(false);
    const [state] = GlobalAuthHook();

    useEffect(()=>{

        const authCheck = async () => {
          try {
            const res = await axios.get(`${config.apiUrl}/api/v1/auth/userdashboard`)
            if(res.data.ok){
              setOk(true)
            }else{
              setOk(false)
            }
          } catch (error) {
            console.log('Error fetching profile:', error);
            setOk(false);
          }
 
        }
        if(state?.token) authCheck();
    },[state?.token])


  return ok ? <Dashboard /> : <Login />

}

export default PrivateRouter

