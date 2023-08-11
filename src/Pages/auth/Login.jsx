import React, { useState } from "react";
import axios from "axios";
import { useNavigate ,useLocation} from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

//global hook
import { GlobalAuthHook } from "../../Context/authContext";

//css
import "../../CSS/Register.css";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {

  const [state,setState] = GlobalAuthHook();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        " http://localhost:4000/api/v1/auth/login",
        { email,password, }
      );
      if(res.data.success){
        toast.success('user is Login');
        setState({
          ...state,
          user : res.data.user,
          token : res.data.token,
        })
        localStorage.setItem("auth",JSON.stringify(res.data))
        navigate(location.state || '/')   
      }else{
        toast.error(res.data.message)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="register">
      <ToastContainer />
      <form onSubmit={handleRegistration}>


        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control "
            id="exampleInputEmail1"
            placeholder="Enter your email"
            autoComplete="none"
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter your password"
            autoComplete="none"
            required
          />
        </div>


        <button type="submit" className="btn btn-primary">
          Submit
        </button>

      </form>

    </div>
  );
};

export default Register;
