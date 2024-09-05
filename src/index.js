import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import
import App from './App';
import { AuthProvider } from './contexts/AuthContext';

// Create a root and render your app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
