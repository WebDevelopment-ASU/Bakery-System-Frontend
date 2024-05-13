import React, { useState } from 'react';
import styles from './CustomerNavbar.module.css';
import { IoPersonSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import BackeryLogo from '../../assets/backeryLogo.png';

const CustomerNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.Navbar}>
            <div className={styles.logo_container}>
                <img src={BackeryLogo} alt="Logo" className={styles.logo} />
                <span className={styles.navlogo}>The Bakery Shop</span>
            </div>

            <div className={isOpen ? `${styles.items} ${styles.open}` : styles.items}>
                <a href="/home">Home</a>
                <a href="/About">About</a>
                <a href="/customer/products">Products</a>
                <a href="/customer/cart">Cart</a>
                <a href="/" type="button" onClick={() => localStorage.removeItem('token')}>
                    Logout
                </a>
                <a href="/customer/profile">
                    <IoPersonSharp />
                </a>
            </div>

            <div
                className={isOpen ? `${styles.navToggle} ${styles.open}` : styles.navToggle}
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className={styles.bar}></div>
            </div>
        </div>
    );
};
export default CustomerNavbar;
