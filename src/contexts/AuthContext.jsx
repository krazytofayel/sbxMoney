
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [isRegistered, setIsRegistered] = useState(null);
  const [accessToken, setAccessToken] = useState(null);

  return (
    <AuthContext.Provider value={{ isRegistered, setIsRegistered, accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  );
};
