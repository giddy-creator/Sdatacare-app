import React from "react"; 

function Footer() {

      return(
     <footer className="footer text-white mt-3 pt-2 pb-2 border-top" style={{ borderColor: "rgba(255,255,255,0.5)" }}>
      <div className="container text-center">
        <div className="row">
          {/* Company Info */}
          <div className="col-md-4 mx-auto mb-2">
            <h5 className="logo-name fw-bold mb-1">Sdatacare</h5>
            <p className="mb-0 " style={{ fontSize: "0.85rem", color:"black" }}>
              Protecting and managing your data with care. Secure, reliable, and efficient solutions for every need.
            </p>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mx-auto mb-2">
            <h5 className="logo-name fw-bold mb-2">Contact</h5>
            <p className=" mb-0" style={{color:"black"}}><i className="bi bi-house-door me-1"></i> Kitui, Kenya</p>
            <p className="mb-0" style={{color:"black"}}><i className="bi bi-envelope me-1"></i> sdatacare2019@gmail.com</p>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-2" style={{ fontSize: "0.85rem", fontWeight: "bold" ,color:"black"}}>
          © {new Date().getFullYear()} Sdatacare. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


export default Footer;