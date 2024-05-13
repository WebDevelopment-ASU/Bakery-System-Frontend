import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/login/LoginPage';
import SignUpPage from './pages/signup/SignupPage';
import ProfilePage from './pages/profile/ProfilePage';
import Product from './pages/products/Products';
import CreateProduct from './pages/products/CreateProduct';
import EditProduct from './pages/products/EditProduct';
import { StaffLayout, CustomerLayout } from './Layout';
import CustomerProduct from './pages/CustomerPage/Products';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />

                <Route element={<StaffLayout />}>
                    <Route path="/staff/home" element={<LandingPage />} />
                    <Route path="/staff/products" element={<Product />} />
                    <Route path="/staff/add-product" element={<CreateProduct />} />
                    <Route path="/staff/edit-product/:id" element={<EditProduct />} />
                    <Route path="/staff/profile" element={<ProfilePage />} />
                </Route>

                <Route element={<CustomerLayout />}>
                    <Route path="/customer/home" element={<LandingPage />} />
                    <Route path="/customer/products" element={<CustomerProduct />} />
                    <Route path="/customer/profile" element={<ProfilePage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
