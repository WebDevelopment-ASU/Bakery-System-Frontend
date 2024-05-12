import React, { useState } from 'react';
import BackeryLogo from '../assets/backeryLogo.png';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.Navbar}>
            <div className={styles.logo_container}>
                <img src={BackeryLogo} alt="Logo" className={styles.logo} />
                <span className={styles.navlogo}>The Bakery Shop</span>
            </div>

            <div className={isOpen ? `${styles.items} ${styles.open}` : styles.items}>
                <a href="./home">Home</a>
                <a href="/about">About</a>
                <a href="/login">Login</a>
                <a href="/signup">SignUp</a>
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
export default Navbar;
