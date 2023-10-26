import React,{useState} from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

//Layout
import OffCanvas from "./OffCanvas";
//icons
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineSearch,AiOutlineShoppingCart } from "react-icons/ai";

//css
import HeaderCSS from "../CSS/Header.module.css";

//CartHook
import { GlobalCartHook } from "../Context/CartContext";
import { GlobalProductHook } from "../Context/ProductContext";

import { useSelector } from "react-redux";


const Header = () => {
  const { Cart } = GlobalCartHook();

  const {products} = GlobalProductHook();

  const Authentication = useSelector((state)=> state.authentication)
      console.log(Authentication);

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
      <section id={HeaderCSS.header} >
        <OffCanvas />

        <div className={HeaderCSS.logo}>
          <a href="/"> SHOPEE</a>
        </div>

        <div className={HeaderCSS.searchBar}>
          <input type="text" placeholder="Search in shopee" value={searchValue}  onChange={handleSearch}  />
          <button type="search">
            <AiOutlineSearch
              className={HeaderCSS.searchIcon}
              style={{ color: "white" }}

            />
          </button>
          {searchValue.length > 1 && <div className={HeaderCSS.search_value}><ul> {filteredProducts.map((product,index) => (
          <li key={index}><Link to={`/SingleProduct/${product.slug}`}>{product.title}</Link></li>
          ))}</ul></div>} 
        </div>

        <div className={HeaderCSS.cart_user_div}>
          <div className={HeaderCSS.cart}>
            <NavLink to="/cart">
              <AiOutlineShoppingCart className={HeaderCSS.cartIcon} />
              {Cart.length !== 0 && <span> {Cart.length}</span>}
            </NavLink>
          </div>

          <div className={HeaderCSS.user}>
              <Link to={Authentication.email && Authentication.password !== null ? '/dashboard' : '/login'}>
                <HiOutlineUser className={HeaderCSS.user_icon} />{" "}
              </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
