import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Inventory from './pages/Inventory/InventoryPage';
import Map from './pages/Map/Map';
import Quests from './pages/Quests/Quests';
import Market from './pages/Market/Market';
import Settings from './pages/Settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword'; // Import ForgotPassword page
import { useAuth } from './contexts/AuthContext';

function App() {
  const { currentUser } = useAuth();

  return (
    <Router>
      {currentUser ? (
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/map" element={<Map />} />
            <Route path="/quests" element={<Quests />} />
            <Route path="/market" element={<Market />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Redirect to home if path doesn't exist */}
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ForgotPassword />} /> {/* Add ForgotPassword route */}
          <Route path="*" element={<Navigate to="/login" />} /> {/* Redirect to login if not authenticated */}
        </Routes>
      )}
    </Router>
  );
}

export default App;
