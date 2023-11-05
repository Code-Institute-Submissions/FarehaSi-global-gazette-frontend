import React from 'react';
import { Link } from 'react-router-dom';
import worldLogo from '../assets/img/earth.png';
import { useAuth } from '../context/ReactQueryContext';

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();

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
          {isAuthenticated ? (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">My Profile</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="#mission">Our Mission & Community</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">Sign In</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
