import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import worldLogo from '../assets/img/earth.png';
import { useAuth } from '../context/ReactQueryContext';
import './Navbar.css'

const NavBar = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 50) { 
        setNavVisible(false); 
      } else {
        setNavVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`navbar sticky-top navbar-expand-lg px-4 navbar-light bg-light border-bottom ${
        !navVisible ? 'hide-nav' : ''
      }`}
    >
      <Link className="navbar-brand" to="/">
        <img
          src={worldLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Global Gazette Logo"
        />
        Global Gazette
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
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
                <Link className="nav-link" to="/articles/create">Create new Post</Link>
              </li>
              <li className="nav-item">
                <button className="nav-link btn btn-link" onClick={logout}>Logout</button>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/our_mission">Our Mission & Community</Link>
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
