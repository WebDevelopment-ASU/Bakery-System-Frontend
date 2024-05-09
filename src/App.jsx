// function App() {
//     return (
//         <div className={styles.App}>
//             <StaffNavbar />
//             <Products />
//             <Footer/>
//         </div>
//     );
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignupPage';

function App() {
  return (
    <Router>
      <div className={styles.App}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/products" element={<Products />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}


export default App;
