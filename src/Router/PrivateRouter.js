
import React, { useEffect, useState } from 'react';
import Dashboard from "../Pages/User/Dashboard"
import Spinner from '../Component/Spinner';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

//global Hook
import { GlobalAuthHook } from '../Context/authContext'

const PrivateRouter = () => {
    const [ok ,setOk]= useState(false);
    const [state,setState] = GlobalAuthHook();

    useEffect(()=>{

        const authCheck = async () => {
          try {
            const res = await axios.get("http://localhost:4000/api/v1/auth/userdashboard")
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


  return ok ? <Dashboard /> : <Spinner />

}

export default PrivateRouter

