import React from 'react';
import worldLogo from '../assets/img/earth.png';

const GNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg px-4 navbar-light bg-light border-bottom">
      <a className="navbar-brand" href="#">
        <img
          src={worldLogo}
          width="30"
          height="30"
          alt="Global Gazette Logo"
          className="d-inline-block align-top"
        />
        Global Gazette
      </a>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#mission">Our Mission & Community</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#signup">Sign Up</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#signin">Sign In</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default GNavbar;
