import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [token, setToken] = useState("");
  const toggleAuth = () => {
    setIsAuth(!isAuth);
  };

  return (
    <AuthContext.Provider
      value={{ toggleAuth, isAuth, token, setToken, setIsAuth }}
    >
      {children}
    </AuthContext.Provider>
  );
};
