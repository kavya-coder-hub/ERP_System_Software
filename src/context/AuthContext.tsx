import React, { createContext, useContext, useState } from 'react';
import { AuthState, User, LoginCredentials, SignupData } from '../types/auth';

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
  });

  const login = async (credentials: LoginCredentials) => {
    // In a real app, this would make an API call
    // For demo purposes, we'll simulate a successful login
    const mockUser: User = {
      id: '1',
      email: credentials.email,
      name: 'Demo User',
      role: 'admin',
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
    });
  };

  const signup = async (data: SignupData) => {
    // In a real app, this would make an API call
    // For demo purposes, we'll simulate a successful signup
    const mockUser: User = {
      id: '1',
      email: data.email,
      name: data.name,
      role: 'user',
      company: data.company,
    };

    setAuthState({
      user: mockUser,
      isAuthenticated: true,
    });
  };

  const logout = () => {
    setAuthState({
      user: null,
      isAuthenticated: false,
    });
  };

  return (
    <AuthContext.Provider value={{ ...authState, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}