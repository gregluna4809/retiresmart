import React, { createContext, useContext, useEffect, useState } from "react";
import { login as loginRequest, register as registerRequest } from "../api/authApi";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (storedToken && storedUser) {
      setToken(storedToken);
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const setAuthData = (authResponse) => {
    const authUser = {
      userId: authResponse.userId,
      firstName: authResponse.firstName,
      lastName: authResponse.lastName,
      email: authResponse.email,
      role: authResponse.role,
    };

    setToken(authResponse.token);
    setUser(authUser);

    localStorage.setItem("token", authResponse.token);
    localStorage.setItem("user", JSON.stringify(authUser));
  };

  const login = async (loginData) => {
    const response = await loginRequest(loginData);
    setAuthData(response);
    return response;
  };

  const register = async (registerData) => {
    const response = await registerRequest(registerData);
    setAuthData(response);
    return response;
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

  const value = {
    user,
    token,
    loading,
    isAuthenticated: !!token,
    login,
    register,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};