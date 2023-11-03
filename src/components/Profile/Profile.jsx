import React from 'react'
import { useAuth } from '../../context/ReactQueryContext';

const Profile = () => {
    const { user } = useAuth();
    if (!user) return <div>Loading...</div>;

  return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Profile Information</div>
                        <div className="card-body">
                            <div className="mb-3">
                                <label className="form-label">Display Picture:</label>
                                <img 
                                    src={user.profile_picture || "path-to-default-image.jpg"} 
                                    alt="Profile" 
                                    className="img-thumbnail mb-2" 
                                    style={{ width: '150px' }}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Full Name:</label>
                                <input type="text" className="form-control" value={user.username} readOnly />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email:</label>
                                <input type="text" className="form-control" value={user.email} readOnly />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Bio:</label>
                                <textarea className="form-control" value={user.bio} readOnly />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Profile