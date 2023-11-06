import React, { useRef, useState } from 'react';
import { useAuth } from '../../context/ReactQueryContext';
import { useMutation } from 'react-query';
import apiFetch from '../../utils/api';

const Profile = () => {
    const { user, setUser } = useAuth();
    const [fullName, setFullName] = useState(user?.full_name);
    const [bio, setBio] = useState(user?.bio);
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInputRef = useRef(null);

    const updateUserProfileMutation = useMutation(
        (formData) => apiFetch('/auth/me/update', {
            method: 'PUT',
            body: formData,
        }, true, false),
        {
            onSuccess: (data) => {
                setUser(data);
            },
            onError: (error) => {
                console.error('Update profile error:', error);
            },
        }
    );

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData();
        if (selectedFile) {
            formData.append('profile_picture', selectedFile);
        }
        formData.append('full_name', fullName);
        formData.append('bio', bio);

        updateUserProfileMutation.mutate(formData);
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    if (!user) return <div>Loading...</div>;

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Profile Information</div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <img 
                                        src={`http://localhost:8000${user.profile_picture}` || "path-to-default-image.jpg"} 
                                        alt="Profile" 
                                        className="img-thumbnail mb-2" 
                                        style={{ width: '150px', height: '150px', objectFit: 'cover', cursor: 'pointer' }}
                                        onClick={triggerFileInput}
                                    />
                                    <input
                                        ref={fileInputRef}
                                        type="file"
                                        className="d-none"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="fullName" className="form-label">Full Name:</label>
                                    <input 
                                        id="fullName"
                                        type="text" 
                                        className="form-control" 
                                        value={fullName} 
                                        onChange={(e) => setFullName(e.target.value)} 
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="bio" className="form-label">Bio:</label>
                                    <textarea 
                                        id="bio"
                                        className="form-control" 
                                        value={bio} 
                                        onChange={(e) => setBio(e.target.value)}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={updateUserProfileMutation.isLoading}>
                                    Update Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
