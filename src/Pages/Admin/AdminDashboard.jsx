import React from "react";
import { GlobalAuthHook } from "../../Context/authContext";
import AdminMenu from "../../Component/AdminMenu";
import {Outlet} from "react-router-dom";

const AdminDashboard = () => {
  const [state, setState] = GlobalAuthHook();


  return (
    <>
      {state?.user.role === 1 ? (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                 <AdminMenu />
              </div>
              <div className="col-md-9">
               <Outlet />
              </div>
            </div>  
          </div>
        </>
      ) : (
        <p>you are not admin</p>
      )}
    </>
  );
};

export default AdminDashboard;
