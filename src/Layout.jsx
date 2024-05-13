import { Outlet } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import StaffNavbar from './components/navbar/StaffNavbar';
import CustomerNavbar from './components/navbar/CustomerNavbar';
import Footer from './components/footer/Footer';

export function StaffLayout() {
    const [role, setRole] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setRole(decoded.role);
        }
    }, []);

    return (
        <div className="w-full">
            <StaffNavbar />
            {role === 'STAFF' ? (
                <Outlet />
            ) : (
                <div className="h-screen w-full flex flex-col gap-4 justify-center items-center">
                    This page is only accessible by staff
                    <a href="/login" className="px-4 py-2 bg-blue-500 rounded-lg text-white">
                        Please Login as a Staff member
                    </a>
                </div>
            )}
            <Footer />
        </div>
    );
}

export function CustomerLayout() {
    const [role, setRole] = useState('');

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const decoded = jwtDecode(token);
            setRole(decoded.role);
        }
    }, []);

    return (
        <div className="w-full">
            <CustomerNavbar />
            {role === 'CUSTOMER' ? (
                <Outlet />
            ) : (
                <div className="h-screen w-full flex flex-col justify-center items-center">
                    This page is only accessible by customers
                    <a href="/login" className="px-4 py-2 bg-blue-500 rounded-lg text-white">
                        Please Login as a Customer member
                    </a>
                </div>
            )}{' '}
            <Footer />
        </div>
    );
}
