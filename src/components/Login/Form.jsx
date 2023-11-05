import React, { useState } from 'react';
import { useAuth } from '../../context/ReactQueryContext';
import loginIMG from '../../assets/img/login.jpg'
import { useNavigate } from 'react-router-dom';

const Form = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await login.mutateAsync({ username, password }, {
                onSuccess: () => {
                    navigate('/profile');
                }
            });
        } catch (error) {
            const message = error?.message || 'Login failed. Please try again.';
            setErrorMessage(message);
            console.error("Login failed:", error);
        }
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h2 className="mb-4">Login</h2>
                    {errorMessage && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {errorMessage}
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setErrorMessage('')}></button>
                        </div>
                    )}
                    <div className="mb-3">
                        <label className="form-label">Username:</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password:</label>
                        <input 
                            type="password" 
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} 
                        />
                    </div>
                    <button className="btn btn-primary" onClick={handleLogin}>Login</button>
                </div>
                <div className="col-md-6">
                    <img src={loginIMG} alt="Description of the image" className="img-fluid"/>
                </div>
            </div>
        </div>
    );
};

export default Form;
