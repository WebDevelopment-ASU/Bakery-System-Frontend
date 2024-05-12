import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignupPage';
import Product from './pages/products/Products';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/products" element={<Product />} />
                <Route path="/profile" element={<ProfilePage />} />
                {/* Add other routes as needed */}
            </Routes>
        </Router>
    );
}

export default App;
