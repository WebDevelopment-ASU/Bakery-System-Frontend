import React from 'react';
import styles from './Credentials-Header.module.css';
import BackeryLogo from '../../assets/backeryLogo.png';

function Header() {
    return (
        <header className={styles.main}>
            <img src={BackeryLogo} alt="logo" />
        </header>
    );
}

export default Header;
