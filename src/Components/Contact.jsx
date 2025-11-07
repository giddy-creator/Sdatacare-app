
import React from "react";

function Contact() {
  return (
    <div className="container py-5">
    
      <div className="d-flex justify-content-center">
        <div className="  shadow-lg" 
        style={{ maxWidth: '1000px',
            width: '90%',
            fontSize: '2rem',
            padding:'9rem',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            borderRadius: '3rem'
        }}>
          <h2 className="mb-4 text-center" style={{color:"#1d2b64"}}>Contact Us <i className="bi bi-telephone-fill me-1"></i>
          </h2>
          <p className="fs-4 text-center">
            Should you want to acquire any of our services or
            if you have any questions, feel free to reach out to us at:
          </p>
          <br></br>
          <p className="text-center" ><i className="bi bi-envelope me-1"> </i>press email 
           <br></br>
           <div style={{  display: "flex",
             justifyContent: "center",
              alignItems: "center",
              marginTop: "1rem",
              gap:'1rem'
             }}> <i className="bi bi-arrow-right-circle-fill" style={{ color: "#1d2b64", fontSize: "2.5rem" }}> 
             </i> 


            <a
            href="mailto:sdatacare2019@gmail.com"
            style={{
            backgroundColor: "#1d2b64",  
            color: "white",                         
            padding: "8px 18px",                
            borderRadius: "30px",                   
            textDecoration: "none",                 
            fontWeight: "bold",                     
             }}
             onMouseEnter={(e) =>
                (e.target.style.backgroundColor = "rgb(234, 181, 112)")
              }
              onMouseLeave={(e) =>
                (e.target.style.backgroundColor = "#1d2b64")
              }
              >
            sdatacare2019@gmail.com
            </a>
            </div>
          </p>
          
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
