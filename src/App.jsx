import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignupPage';
import Product from './pages/products/Products';
import CreateProduct from './pages/products/CreateProduct';
import EditProduct from './pages/products/EditProduct';
import { StaffLayout } from './Layout';

function App() {
    return (
        <Router>
            <div className={styles.App}>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />

                    <Route element={<StaffLayout />}>
                        <Route path="/products" element={<Product />} />
                        <Route path="/add-product" element={<CreateProduct />} />
                        <Route path="/edit-product/:id" element={<EditProduct />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
