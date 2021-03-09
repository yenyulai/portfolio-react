import React from "react";
import { Link, useLocation } from "react-router-dom";


function Header() {

    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand, text-info" href="#" id="name" style={{background:"transparent",fontSize:"25px"}}>Yenyu Lai</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <ul className="navbar-nav mt-2 mt-lg-0 ml-auto">
          <li className="nav-item">
            <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
            About</Link>
        </li>
        <li className="nav-item">
            <Link to="/project" className={window.location.pathname === "/project" ? "nav-link active" : "nav-link"}> Project</Link>
      </li>
      <li className="nav-item">
            <Link to="/contact" className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}> Contact</Link>
      </li>
          </ul>
        </div>
      </nav>
    );

}

export default Header;