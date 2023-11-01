import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from 'react-query';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import queryClient from './providers/queryClient';
import { AuthProvider } from './context/ReactQueryContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
);