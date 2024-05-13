import { Outlet } from 'react-router-dom';

import React from 'react';
import StaffNavbar from './components/navbar/StaffNavbar';
import CustomerNavbar from './components/navbar/CustomerNavbar';
import Footer from './components/footer/Footer';

export function StaffLayout() {
    return (
        <div className="w-full">
            <StaffNavbar />
            <Outlet />
            <Footer />
        </div>
    );
}

export function CustomerLayout() {
    return (
        <div className="w-full">
            <CustomerNavbar />
            <Outlet />
            <Footer />
        </div>
    );
}
