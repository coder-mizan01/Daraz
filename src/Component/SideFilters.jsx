import React, { useEffect, useState } from "react";

//css
import "../CSS/SideFilters.css";

//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';

//
import { useDispatch } from "react-redux";

//actions
import { categoryWiseProductsAction, polobrand,nobrand } from "../Redux/FilterProduct";

const SideFilters = ({products}) => {

  const [selectedBrand, setSelectedBrand] = useState("");
  const [check, setCheck] = useState(false);
  const[showbrand,setShowbrand]=useState(false)

  const handleBrand = (e, brand) => {
    setSelectedBrand(brand);  
    setCheck(e.target.checked);   
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedBrand === "polo" && check === true) {
      dispatch(polobrand(products));
    }
    if(selectedBrand === "polo" && check === false) {
      dispatch(categoryWiseProductsAction(products));
    }
    if(selectedBrand === "no-brand" && check === true){
      dispatch(nobrand(products))
    }
    if(selectedBrand === "no-brand" && check === false) {
      dispatch(categoryWiseProductsAction(products));
    }

  }, [dispatch, selectedBrand, check]);
  
 
  return (
    <>
      <div className="side_filters">
        <div className={`check_brands ${showbrand ?'':"collpase"}`}  style={{ marginBottom: "10px" }}>
         <div className="toggle_div">
          <h5>Brands</h5>
          {showbrand ? <FontAwesomeIcon icon={faPlus} onClick={()=>{setShowbrand(!showbrand)}} /> : <FontAwesomeIcon icon={faMinus}  onClick={()=>{setShowbrand(!showbrand)}} />}
         </div>
          {/* create a a built-in JavaScript data structure that stores unique values.   */}
          {[...new Set(products.map((product) => product.brand))].map(
            (brand, index) => {
              return (
                  <div className="brand" key={index}>
                  <input
                    type="checkbox"
                    className="brand-checkbox"
                    onClick={(e) => handleBrand(e, brand)}
                  />
                  <label htmlFor="">{brand}</label>
                  </div >
              )
            })}
          </div>
        </div>

    </>
  );
};

export default SideFilters;
