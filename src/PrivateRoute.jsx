import React from 'react';
import { Navigate } from 'react-router-dom';

const isAuthenticated = () => {
  // Verifica se está autenticado (simples, usando localStorage)
  return localStorage.getItem('auth') === 'true';
};

const PrivateRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
