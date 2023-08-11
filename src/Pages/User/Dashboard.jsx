import React from "react";
import { GlobalAuthHook } from "../../Context/authContext";
import { Routes , Route , Outlet} from "react-router-dom";

//Pages
import Orders from "./Orders";
import Profile from "./Profile";
import UserMenu from "../../Component/UserMenu";

const Dashboard = () => {
  const [state, setState] = GlobalAuthHook();

  return (
    <>
      {state?.user.role === 0 ? (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                 <UserMenu />
              </div>
              <div className="col-md-9">
               <Outlet />
        
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>You are admin sir , this page is for user</h2>
        </>
      )}
    </>
  );
};

export default Dashboard;
