import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './ReactQueryContext';

const RedirectOnAuthChange = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/profile');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  return null;
};


export default RedirectOnAuthChange;