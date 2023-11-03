import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const getLinkClass = (path) => {
    return currentPath === path ? "nav-link text-uppercase font-weight-bold" : "nav-link";
  };

  return (
    <div className="container mt-3">
      <ul className="nav nav-pills justify-content-center border-bottom">
        <li className="nav-item">
          <Link className={getLinkClass("/profile")} to="/profile">
            Profile Information
          </Link>
        </li>
        <li className="nav-item">
          <Link className={getLinkClass("/profile/my-posts")} to="/profile/my-posts">
            My Posts
          </Link>
        </li>
        <li className="nav-item">
          <Link className={getLinkClass("/profile/liked-posts")} to="/profile/liked-posts">
            Posts Liked
          </Link>
        </li>
        <li className="nav-item">
          <Link className={getLinkClass("/profile/followers")} to="/profile/followers">
            Followers
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Navigation;
