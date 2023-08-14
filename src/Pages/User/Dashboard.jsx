import React from "react";
import { GlobalAuthHook } from "../../Context/authContext";
import { Outlet} from "react-router-dom";

//Pages

import UserMenu from "../../Component/UserMenu";

const Dashboard = () => {
  const [state] = GlobalAuthHook();

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
               <Outlet state={state} />
        
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
