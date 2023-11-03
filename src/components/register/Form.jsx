import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/ReactQueryContext';
import registerImg from '../../assets/img/register.jpg'

const Form = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
    
        try {
            await register.mutateAsync(formData);  
            // alert('Registration successful!'); 
            navigate('/login'); 
        } catch (error) {
            if (error?.username && error.username[0] === "A user with that username already exists.") {
                alert("A user with that username already exists.");
            }
        }
    };
  return (
        <div className="container mt-5">
            <h2 className="mb-4">Join the Global Gazette Community!</h2>
            <div className="row">
                <div className="col-md-8">
                    <p>Welcome to the Global Gazette, your passport to a world of knowledge, diverse perspectives, 
                       and meaningful connections. Signing up is your first step toward becoming a part of our global 
                       community of writers and readers. Join us today and start your journey of exploration and discovery!</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Username:</label>
                            <input type="text" name="username" value={formData.username} onChange={handleInputChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">E-mail:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleInputChange} className="form-control" required />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password (again):</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} className="form-control" required />
                        </div>
                        <button type="submit" className="btn btn-primary">Sign Up</button>
                    </form>
                </div>
                <div className="col-md-4">
                    <img src={registerImg} alt="Your Image Description" className="img-fluid" />
                </div>
            </div>
        </div>
  )
}

export default Form