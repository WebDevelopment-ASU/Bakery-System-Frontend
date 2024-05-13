import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignupPage';
import ProfilePage from './pages/profile/ProfilePage';
import Product from './pages/products/Products';
import CreateProduct from './pages/products/CreateProduct';
import EditProduct from './pages/products/EditProduct';
import { StaffLayout } from './Layout';
import CustomerProduct from './pages/CustomerPage/Products';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/customer" element={<CustomerProduct />} />

                <Route element={<StaffLayout />}>
                    <Route path="/products" element={<Product />} />
                    <Route path="/add-product" element={<CreateProduct />} />
                    <Route path="/edit-product/:id" element={<EditProduct />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
