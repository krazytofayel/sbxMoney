import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('accessToken'); 
  if (!token) {
    return <Navigate to="/sign_in" replace />; 
  }

  return children; // Render the protected route component if authenticated
};

export default ProtectedRoute;
