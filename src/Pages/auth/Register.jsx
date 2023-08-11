import React, { useState } from "react";
import axios from "axios";
import { useNavigate ,Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
//css
import "../../CSS/Register.css";
import "react-toastify/dist/ReactToastify.css";


const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        " http://localhost:4000/api/v1/auth/register",
        { name, email, password, phone }
      );
      if(res.data.success){

        toast.success('user is created')
        navigate('/Login')
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
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-control "
            id="exampleInputName"
            placeholder="Enter your Name"
            autoComplete="none"
            required
          />
        </div>

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

        <div className="mb-3">
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="form-control "
            id="exampleInputPhone"
            placeholder="Enter your Phone"
            autoComplete="none"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
      <Link to='/Login'>
        <button className="btn btn-success">Login</button>
      </Link>
    </div>
  );
};

export default Register;
