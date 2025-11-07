import React from "react";
import umbrellaImage from "../assets/umbrella.jpg"; 
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        
      
        <div className="col-10 col-sm-8 col-lg-6 mx-auto text-center">
          <img
            src={umbrellaImage}
            className="d-block mx-lg-auto img-fluid rounded-circle"
            alt="Umbrella"
            width={700}
            height={300}
            loading="lazy"
            style={{ maxWidth: "80%", height: "auto" }} 
          />
        </div>

        {/* Text Left */}
        <div className="col-lg-6">
          <h1 className="home-h1 display-5 fw-bold text-body-emphasis lh-1 mb-3">
            Welcome to Sdatacare and Capacity Builders
          </h1>
          <h2 className="hero-h2" style={{
            color: "white",
          }}>The Umbrella that keeps your data secure.</h2>
          <p className="lead">
            We aim to protect and manage your data with care.Offering secure,reliable and efficient solutions for every need.
          </p>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
             <Link to="/About">
            <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">
    
              About us ➡️
            </button>
             </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Hero;
