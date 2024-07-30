import React from 'react';
import { Navigate } from 'react-router-dom';
import useTokenValidation from '../CustomHook/UseTokenValidation/useTokenValidation';

const ProtectedRoute = ({ children }) => {
  useTokenValidation();
  const token = localStorage.getItem('accessToken'); 
  if (!token) {
    return <Navigate to="/sign_in" replace />; 
  }

  return children; // Render the protected route component if authenticated
};

export default ProtectedRoute;