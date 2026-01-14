import React, { useEffect, useState } from "react"; 
import sDataIcon from "../assets/umbrella.jpg";
import { NavLink } from "react-router-dom";

// Modern, data-themed header with optional light/dark toggle.
// All existing navigation text is preserved; only presentation is enhanced.
function Header() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".navbar-collapse .nav-link");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    const handleClick = () => {
      if (navbarCollapse) {
        navbarCollapse.classList.remove("show");
      }
    };

    navLinks.forEach((link) => {
      link.addEventListener("click", handleClick);
    });

    return () => {
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleClick);
      });
    };
  }, []);

  useEffect(() => {
    // Simple UI-only theme toggle by toggling a class on the body element.
    if (isDarkMode) {
      document.body.classList.remove("theme-light");
      document.body.classList.add("theme-dark");
    } else {
      document.body.classList.remove("theme-dark");
      document.body.classList.add("theme-light");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top data-navbar shadow-sm">
      <div className="container-fluid px-4">
        <div className="navbar-brand logo fs-2 d-flex align-items-center">
          <div className="logo-mark me-2">
            <img
              src={sDataIcon}
              alt="Umbrella Icon"
              width="42"
              height="42"
              className="me-1"
            />
          </div>
          <span className="logo-name">Sdatacare</span>
        </div>

        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-sm btn-outline-light me-3 theme-toggle-btn d-none d-md-inline-flex"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <i className={isDarkMode ? "bi bi-sun-fill" : "bi bi-moon-stars-fill"}></i>
          </button>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className="nav-link fs-6 me-lg-3 px-3"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/About"
                className="nav-link fs-6 me-lg-3 px-3"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Contact"
                className="nav-link fs-6 px-3"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item d-md-none mt-2">
              <button
                type="button"
                className="btn btn-sm btn-outline-light w-100 theme-toggle-btn"
                onClick={toggleTheme}
              >
                <i className={isDarkMode ? "bi bi-sun-fill me-1" : "bi bi-moon-stars-fill me-1"}></i>
                Theme
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;