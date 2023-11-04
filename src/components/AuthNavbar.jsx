import React from 'react';
import worldLogo from '../assets/img/earth.png';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
  return (
    <nav className="sticky-top navbar navbar-expand-lg px-4 navbar-light bg-light border-bottom">
      <Link className="navbar-brand" to="/">
        <img
          src={worldLogo}
          width="30"
          height="30"
          alt="Global Gazette Logo"
          className="d-inline-block align-top"
        />
        Global Gazette
      </Link>

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" to="/">Home</a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">My Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AuthNavbar;
