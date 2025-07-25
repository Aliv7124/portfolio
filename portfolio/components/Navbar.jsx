import React from 'react'
import { Link } from "react-router-dom";
function Navbar() {
  return (
   <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">My Portfolio</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/education">Education</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/skills">Skills</Link>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
           <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact</Link>
        </li>
       </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar;