import React from "react";
//import { useNavigate,useLocation } from "react-router-dom";

const Spinner = () => {
  /* 
 const [count,setCount] = useState(3);
 const navigate = useNavigate();
 const location = useLocation();

useEffect(()=>{
    const Interval =  setInterval(() => {
        setCount((prvValue)=> -- prvValue)
       
     }, 1000);
     count === 0 && navigate('/login',{state : location.pathname});
     return () => clearInterval(Interval)
   },[count,navigate,location.pathname])*/
 

  return (
    <>
      <div
        style={{
          textAlign: "center",
          height: "60vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
        }}
      >
      {/*   <h2>redirecting to you in {count} seconds</h2> */}
        <div className="spinner-border" role="status">
          <span className="visually-hidden text-center">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default Spinner;
