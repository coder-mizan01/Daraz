
import React, { useEffect, useState } from 'react';
import config from "../../config.json";
import axios from 'axios';

const Users = () => {
  const [users , setUsers] = useState([]);

  useEffect(()=>{
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${config.apiUrl}/api/v1/auth/all-user`);
         if(res.data.success){
           setUsers(res.data.allUser)
         }
      } catch (error) {
        console.log(error);
      }
    }

    fetchUsers();

  },[])

  return (
    <>

     {users.length > 0 && users.map((user,index)=>{
       return <div key={index}>
        <p>  {user.name}</p>
        <p>{user.email}</p>
       </div>
     })} 
   
    </>
  )
}

export default Users