import React from "react";
import { GlobalAuthHook } from "../../Context/authContext";
//import { Outlet} from "react-router-dom";

//Pages

//import UserMenu from "../../Component/UserMenu";

import "../../CSS/Dashboard.css"

const Dashboard = () => {
  const [state,setState] = GlobalAuthHook();

  
  console.log(state);



  const handleLogOut = () =>{
    setState({
      user : null,
      token : null,
    })
    localStorage.removeItem("auth")
  }
  return (
    <>
      {state?.user?.role === 0 ? (
        <>
          <div className="dashboard">

           <div className="nav-content">
             
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="account-tab" data-bs-toggle="tab" data-bs-target="#account-tab-pane" type="button" role="tab" aria-controls="account-tab-pane" aria-selected="true">My Account</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="orders-tab" data-bs-toggle="tab" data-bs-target="#orders-tab-pane" type="button" role="tab" aria-controls="orders-tab-pane" aria-selected="false">My Orders</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="wishlist-tab" data-bs-toggle="tab" data-bs-target="#wishlist-tab-pane" type="button" role="tab" aria-controls="wishlist-tab-pane" aria-selected="false">My Wislist</button>
              </li>

              <li className="nav-item" role="presentation">
                <button className="nav-link" id="balance-tab" data-bs-toggle="tab" data-bs-target="#balance-tab-pane" type="button" role="tab" aria-controls="balance-tab-pane" aria-selected="false">My Balance</button>
              </li>

              
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="voucher-tab" data-bs-toggle="tab" data-bs-target="#voucher-tab-pane" type="button" role="tab" aria-controls="voucher-tab-pane" aria-selected="false">My Voucher</button>
              </li>

              <li className="nav-item" role="presentation"  >
                <button onClick={handleLogOut}  className="nav-link" id="logout-tab" data-bs-toggle="tab" data-bs-target="#logout-tab-pane" type="button" role="tab" aria-controls="logout-tab-pane" aria-selected="false">LogOut</button>
              </li>

            </ul>
            </div>

            
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="account-tab-pane" role="tabpanel" aria-labelledby="account-tab" tabIndex={0}>
                <>
                <h3> Name : {state?.user.name}</h3>
                <h3> Email : {state?.user.email}</h3>
                <h3> Pass : {state?.user.password}</h3>
                <p style={{cursor:'pointer',textDecoration:'underline'}} onClick={()=>alert('feauter will updated')}>edit your details</p>
                </>
              </div>
              <div className="tab-pane fade" id="orders-tab-pane" role="tabpanel" aria-labelledby="orders-tab" tabIndex={0}><><h2>you have no order yet</h2></></div>
              <div className="tab-pane fade" id="wishlist-tab-pane" role="tabpanel" aria-labelledby="wishlist-tab" tabIndex={0}><><h2>you have no wislist </h2></></div>
              <div className="tab-pane fade" id="balance-tab-pane" role="tabpanel" aria-labelledby="balance-tab" tabIndex={0}><><h2>you have no balance </h2></></div>
              <div className="tab-pane fade" id="voucher-tab-pane" role="tabpanel" aria-labelledby="voucher-tab" tabIndex={0}><><h2>you have no voucher </h2></></div>
              <div className="tab-pane fade" id="logout-tab-pane" role="tabpanel" aria-labelledby="logout-tab" tabIndex={0}><><h2>you have no voucher </h2></></div>
            </div>
          </div>

        </>
      ) : (
        <>
          <h2>you have to sign in to access this page</h2>
        </>
      )}
    </>
  );
};

export default Dashboard;
