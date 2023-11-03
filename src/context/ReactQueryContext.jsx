import React, { createContext, useContext, useState, useEffect } from 'react';
import { useMutation, useQuery } from 'react-query';
import { API_BASE_URL } from '../data/config';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('jwtToken'));
    const [user, setUser] = useState(null);

    const fetchCurrentUser = async () => {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch(`${API_BASE_URL}/auth/me/`, {
            headers: {
                'Authorization': `Token ${token}`,
            },
        });
        
        const data = await response.json();

        if (data.error) {
            setIsAuthenticated(false);
            setUser(null);
            localStorage.removeItem('jwtToken');
            return null;
        }
        setUser(data);
        return data;
    };

    const { isError: userProfileError } = useQuery('currentUser', fetchCurrentUser, {
        enabled: isAuthenticated,
        onSuccess: (data) => {
            if (data) {
                setUser(data);
            }
        }
    });

    const loginMutation = useMutation(
        async (credentials) => {
            return fetch(`${API_BASE_URL}/auth/login/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            })
            .then(res => res.json())
            .then(data => {
                if (data.error) {
                    throw data;
                }
                return data;
            });
        },
        {
            onSuccess: (data) => {
                localStorage.setItem("jwtToken", data.token);
                setIsAuthenticated(true);
            },
            onError: (error) => {
                console.error("Login error:", error);
            }
        }
    );

    const registerMutation = useMutation(
        async (credentials) => {
            return fetch(`${API_BASE_URL}/auth/register/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            })
            .then(res => res.json())
            .then(data => {
                if (data.username && data.username[0] === "A user with that username already exists.") {
                    throw data;
                }
                return data;
            });
        },
        {
            onSuccess: (data) => {
                localStorage.setItem("jwtToken", data.token);
                setIsAuthenticated(true);
            },
            onError: (error) => {
                console.error("Registration error:", error);
            }
        }
    );

    const logout = () => {
        localStorage.removeItem("jwtToken");
        setIsAuthenticated(false);
        setUser(null);
    };

    if (userProfileError) {
        console.error("Profile fetching error:", userProfileError);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login: loginMutation, register: registerMutation, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
