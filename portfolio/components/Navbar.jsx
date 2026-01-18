import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  useEffect(() => {
    // Collapse mobile navbar when a link is clicked
    const navLinks = document.querySelectorAll(".nav-link");
    const navCollapse = document.getElementById("navbarSupportedContent");

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        if (navCollapse && navCollapse.classList.contains("show")) {
          // Use Bootstrap's native collapse method safely
          const bsCollapse = window.bootstrap?.Collapse.getInstance(navCollapse) || new window.bootstrap.Collapse(navCollapse);
          bsCollapse.hide();
        }
      });
    });
  }, []);

  return (
    <nav className="navbar navbar-expand-lg premium-navbar sticky-top">
      <div className="container px-lg-5">
        {/* Brand with Shimmer Animation */}
        <Link className="navbar-brand premium-brand" to="/">
          ALIV ROY
        </Link>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler premium-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {[
              { name: "About", path: "/about" },
              { name: "Education", path: "/education" },
              { name: "Skills", path: "/skills" },
              { name: "Projects", path: "/projects" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <li className="nav-item" key={link.name}>
                <Link
                  to={link.path}
                  className={`nav-link premium-link ${
                    location.pathname === link.path ? "active" : ""
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <style>{`
        /* 1. Deep Glassmorphism Effect */
        .premium-navbar {
          background: rgba(5, 5, 5, 0.8) !important;
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 15px 0;
          transition: all 0.4s ease;
        }

        /* 2. Brand Shimmer (Matching Titles) */
        .premium-brand {
          font-weight: 900;
          font-size: 1.5rem;
          letter-spacing: 2px;
          background: linear-gradient(to right, #ffffff, #2ab533, #2575fc, #7faa13);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: brandShimmer 4s linear infinite;
        }

        @keyframes brandShimmer {
          to { background-position: 200% center; }
        }

        /* 3. Link Styling */
        .premium-link {
          color: rgba(255, 255, 255, 0.7) !important;
          font-weight: 500;
          font-size: 0.95rem;
          letter-spacing: 0.5px;
          padding: 8px 15px !important;
          position: relative;
          transition: all 0.3s ease;
        }

        /* Animated Underline */
        .premium-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
          transform: translateX(-50%);
          border-radius: 10px;
        }

        .premium-link:hover {
          color: #fff !important;
        }

        .premium-link:hover::after, .premium-link.active::after {
          width: 80%;
        }

        .premium-link.active {
          color: #fff !important;
          font-weight: 700;
        }

        /* 4. Mobile Toggler Styling */
        .premium-toggler {
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 4px 8px;
        }

        .premium-toggler .navbar-toggler-icon {
          background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255, 255, 255, 0.8)' stroke-width='2' stroke-linecap='round' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
        }

        @media (max-width: 991px) {
          .navbar-collapse {
            background: rgba(10, 10, 10, 0.95);
            margin-top: 15px;
            padding: 20px;
            border-radius: 20px;
            border: 1px solid rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>
    </nav>
  );
}

export default Navbar;