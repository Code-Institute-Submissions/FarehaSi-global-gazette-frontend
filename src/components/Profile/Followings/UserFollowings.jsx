import React from 'react';
import { useQuery } from 'react-query';
import apiFetch from '../../../utils/api';
import './UserFollowers.css';

const UserFollowings = () => {
  const { data: followers, isLoading, isError, error } = useQuery(
    'userFollowings',
    () => apiFetch('/auth/me/following/')
  );

  if (isLoading) {
    return <div className="text-center"><span>Loading followers...</span></div>;
  }

  if (isError) {
    return <div className="text-danger"><span>Error: {error.message}</span></div>;
  }

  return (
    <div className="container">
      <h2 className="text-left mb-4">Writers you follow:</h2>
      <div className="row">
        {followers.map((follower) => (
          <div key={follower.id} className="col-md-2 col-sm-6 mb-3">
            <div className="follower-card p-3 text-center">
              <img
                src={`http://localhost:8000${follower.profile_picture}`}
                alt={follower.full_name}
                className="img-fluid mb-2 follower-image"
              />
              <div className="fw-bold">{follower.full_name || follower.username}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserFollowings;
