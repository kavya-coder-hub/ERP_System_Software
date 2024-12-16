import React from 'react';
import { AuthProvider } from './context/AuthContext';
import { SalesProvider } from './context/SalesContext';
import { useAuth } from './context/AuthContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Sales from './pages/Sales';
import Auth from './pages/Auth';

function AppContent() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Auth />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Sidebar />
      <div className="ml-64">
        <Header />
        <main className="pt-16">
          <Sales />
        </main>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <SalesProvider>
        <AppContent />
      </SalesProvider>
    </AuthProvider>
  );
}

export default App;