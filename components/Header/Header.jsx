import React from "react";
import './Header.css';
// import NetflixLogo from "../../src/assets/images/logo.png"
import netflixLogo from '../../src/assets/images/Netflix_Symbol_CMYK.png';
function Header() {
  return (
    <div className="header_outer_container">
        
        <div className="header_container">

         <div className="header_left">
             <ul className="navbars">
                <li><img src={netflixLogo} alt="" className="Logo" /></li>
                <li className="navs">Netflix</li>
                <li className="navs">Home</li>
                <li className="navs">TVshows</li>
                <li className="navs">Movies</li>
                <li className="navs">Latest</li>
                <li className="navs">Mylist</li>
                <li className="navs">Browse by languages</li>
             </ul>
          </div>
          <div className="header_right">
               <ul>
                <li><i className="fa-solid fa-magnifying-glass"></i></li>
                <li><i className="fa-solid fa-bell"></i></li>
                <li><i className="fa-solid fa-user-circle"></i></li>
                <li><i className="fa-solid fa-caret-down"></i></li>
               
               </ul>
          </div>
         </div>
      
    </div>
  );
}       
export default Header;