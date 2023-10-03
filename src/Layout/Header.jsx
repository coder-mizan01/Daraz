import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

//Layout
import OffCanvas from "./OffCanvas";
//icons
import { BsCartCheck } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FaUserCircle, FaUserPlus } from "react-icons/fa";

//css
import "../CSS/Header.css";

//CartHook
import { GlobalCartHook } from "../Context/CartContext";
import { GlobalAuthHook } from "../Context/authContext";
import { GlobalProductHook } from "../Context/ProductContext";

const Header = () => {
  const { Cart } = GlobalCartHook();
  const [state] = GlobalAuthHook();
  const {products} = GlobalProductHook();
  console.log(products);

  const [searchValue, setSearchValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
   
  const handleSearch = (e) =>{
   const  inputValue = e.target.value;
    setSearchValue(inputValue);
      
    const matchingProducts = products.filter((pro)=>{
      return pro.title.toLowerCase().includes(inputValue.toLowerCase());
    })

    setFilteredProducts(matchingProducts);
  }
  return (
    <>
      <header id="header">
        <OffCanvas />

        <div className="logo">
          <a href="/"> SHOPEE</a>
        </div>

        <div className="searchBar">
          <input type="text" placeholder="Search in shopee" value={searchValue}  onChange={handleSearch}  />
          <button type="search">
            <AiOutlineSearch
              className="searchIcon"
              style={{ color: "white" }}

            />
          </button>
          {searchValue.length > 1 && <div className="search-value"><ul> {filteredProducts.map((product,index) => (
          <li key={index}><Link to={`/SingleProduct/${product.slug}`}>{product.title}</Link></li>
          ))}</ul></div>} 
        </div>

        <div className="cart-user-div">
          <div className="cart">
            <NavLink to="/cart">
              <BsCartCheck className="cartIcon" />
              {Cart.length !== 0 && <span> {Cart.length}</span>}
            </NavLink>
          </div>

          <div className="user">
            {state.user && state.token !== null ? (
              <Link to="/dashboard">
                {" "}
                <FaUserCircle className="user-icon" />{" "}
              </Link>
            ) : (
              <div className="homepage-register-login">
                <FaUserPlus className="icon" />

                <div>
                  <p>Account</p>
                  <Link to="/register">register</Link> or{" "}
                  <Link to="/login">login</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
