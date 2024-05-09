import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignupPage';
import Product from './pages/products/Products';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/products" element={<Product />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;