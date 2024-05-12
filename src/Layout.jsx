import React from 'react';
import Navbar from './components/navbar/StaffNavbar';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router-dom';

export function StaffLayout() {
    return (
        <div className="w-full">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
}
