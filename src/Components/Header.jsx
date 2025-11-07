import React from "react"; 
import sDataIcon from "../assets/umbrella.jpg"
import { Link } from "react-router-dom";
import { useEffect } from "react";


function Header(){

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbarCollapse.classList.remove("show");
      });
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", () => {
          navbarCollapse.classList.remove("show");
        });
      });
    };
  }, []);
     return(
     <nav className="navbar navbar-expand-lg navbar-light  fixed-top py-1">
      <div className="container-fluid">
           
        <div className=" navbar-brand logo fs-2 ">
        <img
         src={sDataIcon}
          alt="Umbrella Icon"
          width="42"
          height="42"
          className="me-2" 
           style={{ borderRadius: '20px' }}
  
        />
        
        <span className="logo-name">Sdatacare</span>
          
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link  fs-5 me-4" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/About" className="nav-link fs-5 me-4" >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link fs-5 me-4" >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
         
         export default Header;