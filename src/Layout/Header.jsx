import React,{useState,useEffect} from "react";

//Layout
import Menubar from "./Menubar";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp} from "@fortawesome/free-solid-svg-icons";

//css
import HeaderCSS from "../CSS/Header.module.css";

//component
import SearchBar from "../Component/SearchBar";
import HomePageCart_User from "../Component/HomePageCart_User";


const Header = () => {



  const [onScrollMenuBar , setOnSrollMenuBar] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setScrolling(true);
    } else {
      setScrolling(false);
      setOnSrollMenuBar(false)
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section id={HeaderCSS.header} className={`${scrolling ? HeaderCSS.sticky :  ""}`}  >

      <div className={HeaderCSS.logo}>
          <a className={HeaderCSS.brand} href="/"> SHOPEE</a>
          {scrolling && <div className={HeaderCSS.scrolling_menu} 
           onClick={()=>{setOnSrollMenuBar(!onScrollMenuBar)}} >
          {onScrollMenuBar ? <FontAwesomeIcon icon={faChevronUp} />  : 
          <FontAwesomeIcon icon={faChevronDown} /> } categories
            </div>}
        </div>

        {onScrollMenuBar && <Menubar onScrollMenuBar={onScrollMenuBar}  onMouseOver={()=>{setScrolling(true)}} /> }
   
       <SearchBar />

      <HomePageCart_User />
 



      </section>

    </>
  );
};

export default Header;
