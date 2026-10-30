/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("tikusBakeryUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = async (email) => {
    try {
      // Simulate API call - replace with actual API call
      // For demo purposes, we'll create a mock user
      const mockUser = {
        id: Date.now(),
        email: email,
        firstName: "John",
        lastName: "Doe",
        phone: "+251 9XX XXX XXX",
      };

       localStorage.setItem("tikusBakeryUser", JSON.stringify(mockUser));
      setCurrentUser(mockUser);
      return mockUser;
    } catch {
      throw new Error("Login failed");
    }
  };

  const register = async (userData) => {
    try {
      // Simulate API call - replace with actual API call
      const newUser = {
        id: Date.now(),
        ...userData,
      };

       localStorage.setItem("tikusBakeryUser", JSON.stringify(newUser));
      setCurrentUser(newUser);
      return newUser;
    } catch {
      throw new Error("Registration failed");
    }
  };

  const logout = () => {
    localStorage.removeItem("tikusBakeryUser");
    setCurrentUser(null);
  };

  const updateUser = (userData) => {
    const updatedUser = { ...currentUser, ...userData };
    localStorage.setItem("tikusBakeryUser", JSON.stringify(updatedUser));
    setCurrentUser(updatedUser);
  };

  const value = {
    currentUser,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated: !!currentUser,
    loading: false,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
