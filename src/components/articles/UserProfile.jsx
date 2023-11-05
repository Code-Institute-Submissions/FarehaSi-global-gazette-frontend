import React from 'react'
import { useQuery } from 'react-query';
import apiFetch from '../../utils/api';
import timeAgo from '../../utils/timeAgo';

const useUser = (userId) => {
    return useQuery(['user', userId], async () => {
      return apiFetch(`/auth/users/${userId}/`);
    });
};

const UserProfile = ({ userId, datePosted }) => {
    const { data: user, isLoading, isError, error } = useUser(userId);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }
    const getAvatarUrl = (name) => {
        return `https://api.multiavatar.com/${encodeURIComponent(name)}.png`;
    };
    const imageUrl = user?.profile_picture || getAvatarUrl(user?.full_name || user?.username);

    return (
        <div className="d-flex flex-col align-items-center justify-content-start py-3">
            <img
                src={imageUrl}
                className="rounded-circle me-2"
                alt="Profile"
                style={{ width: '48px', height: '48px' }}
            />
            <div >
                <div className='row'>
                    <div className="col fw-bold">{user?.full_name || user?.username}</div>
                    <a className="col text-success ms-auto" href='#'>Follow</a>
                </div>
                <div className="col text-muted">{timeAgo(datePosted)}</div>
            </div>
        </div>
    )
}

export default UserProfile;
