
import React, { useEffect, useState } from 'react';
import Dashboard from "../Pages/Admin/AdminDashboard"
import Spinner from '../Component/Spinner';
import axios from 'axios';

//global Hook
import { GlobalAuthHook } from '../Context/authContext'

const AdminRouter = () => {
    const [ok ,setOk]= useState(false);
    const [state] = GlobalAuthHook();

    useEffect(()=>{

        const authCheck = async () => {
          try {
            const res = await axios.get("https://daraz-api.onrender.com/api/v1/auth/admindashboard")
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

export default AdminRouter

