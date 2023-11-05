import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './context/ReactQueryContext';
import AuthWrapper from './hoc/AuthWrapper';
import routes from './data/routes';
import RedirectOnAuthChange from './context/RedirectOnAuthChange';

const App = () => {
    const { isLoading } = useAuth();
    
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <Routes>
            {routes.map((route) => {
                const WrappedElement = route.isProtected ? AuthWrapper(route.element) : route.element;
                return (
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<WrappedElement />}
                    />
                );
            })}
        </Routes>
    );
}

export default App;