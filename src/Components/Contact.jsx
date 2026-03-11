import React from "react";

function Contact() {
  return (
    <div className="contact-section">

      <h1 className="contact-heading">Contact Us</h1>

      <p className="contact-sub">
      
        Reach out to discuss your project or ask any questions.
      </p>

      <div className="contact-grid">

        <div className="contact-box">
          <i className="bi bi-envelope"></i>
          <h4>Email</h4>
          <p>
            <a href="mailto:sdatacare2019@gmail.com" className="contact-email">
              sdatacare2019@gmail.com
            </a>
          </p>
        </div>

        <div className="contact-box">
          <i className="bi bi-telephone"></i>
          <h4>Phone</h4>
          <p>+254 114768786</p>
        </div>

        <div className="contact-box">
          <i className="bi bi-geo-alt"></i>
          <h4>Office</h4>
          <p> Kitui, Kenya</p>
        </div>

      </div>

    </div>
  );
}

export default Contact;