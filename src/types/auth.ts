export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'user';
  company?: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData extends LoginCredentials {
  name: string;
  company?: string;
}