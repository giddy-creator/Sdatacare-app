import React from "react";
import umbrellaImage from "../assets/umbrella.jpg"; 
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section container-fluid px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5 hero-grid">
        <div className="col-10 col-sm-8 col-lg-5 mx-auto d-flex justify-content-center">
          <div className="hero-visual-wrapper">
            <div className="hero-orbit"></div>
            <div className="hero-orbit hero-orbit-secondary"></div>
            <img
              src={umbrellaImage}
              className="d-block mx-lg-auto img-fluid rounded-circle hero-avatar"
              alt="Umbrella"
              width={700}
              height={300}
              loading="lazy"
            />
          </div>
        </div>

        {/* Text Left */}
        <div className="col-lg-7">
          <div className="hero-copy-card shadow-lg">
            <h1 className="home-h1 display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Welcome to Sdatacare and Capacity Builders
            </h1>
            <h2
              className="hero-h2 mb-3"
              style={{
                color: "white",
              }}
            >
              The Umbrella that keeps your data secure.
            </h2>
            <p className="lead mb-4">
              We aim to protect and manage your data with care.Offering secure,reliable and efficient solutions for every need.
            </p>

            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Link to="/About">
                <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 hero-cta-btn">
                  About us ➡️
                </button>
              </Link>
            </div>
          </div>

          <div className="hero-stats-strip mt-4">
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <i className="bi bi-bar-chart-line"></i>
              </div>
              <div>
                <div className="hero-stat-value">99.9%</div>
                <div className="hero-stat-label">Data uptime focus</div>
              </div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <i className="bi bi-shield-check"></i>
              </div>
              <div>
                <div className="hero-stat-value">24/7</div>
                <div className="hero-stat-label">Security mindset</div>
              </div>
            </div>
            <div className="hero-stat-card">
              <div className="hero-stat-icon">
                <i className="bi bi-diagram-3"></i>
              </div>
              <div>
                <div className="hero-stat-value">360°</div>
                <div className="hero-stat-label">Analytics perspective</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
