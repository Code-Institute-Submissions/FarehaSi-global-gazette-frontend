import React from 'react';
import { useQuery } from 'react-query';
import apiFetch from '../../../utils/api';

const UserFollowers = () => {
  const { data: followers, isLoading, isError, error } = useQuery('userFollowers', 
                  () => apiFetch('/auth/me/following/'),{});

  if (isLoading) {
    return <div>Loading followers...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Followers</h2>
      <ul>
        {followers.map((follower) => (
          <li key={follower.id}>
            <img
              src={`http://localhost:8000${follower.profile_picture}`}
              alt={follower.full_name}
              style={{ width: '50px', height: '50px' }}
            />
            <div>{follower.full_name || follower.username}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserFollowers;
