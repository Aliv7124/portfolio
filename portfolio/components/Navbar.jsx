import React from 'react';
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation(); // to highlight active link dynamically

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          My Portfolio
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {[
              { name: 'About', path: '/about' },
              { name: 'Education', path: '/education' },
              { name: 'Skills', path: '/skills' },
              { name: 'Projects', path: '/projects' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <li className="nav-item" key={link.name}>
                <Link
                  className={`nav-link fw-medium ${location.pathname === link.path ? 'active' : ''}`}
                  to={link.path}
                  style={{
                    transition: 'color 0.3s',
                  }}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Optional inline hover effect */}
      <style jsx>{`
        .nav-link:hover {
          color: #0d6efd !important;
          text-decoration: underline;
        }
        .navbar-brand:hover {
          color: #0d6efd !important;
          transform: scale(1.05);
          transition: transform 0.3s, color 0.3s;
        }
      `}</style>
    </nav>
  );
}

export default Navbar;
