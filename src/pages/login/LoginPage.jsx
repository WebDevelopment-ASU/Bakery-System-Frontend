import React, { useState } from 'react';
import httpClient from '../../utils/httpClient';
import Header from '../../components/credentials/Credentials-Header';
import Footer from '../../components/credentials/Credentials-Footer';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; // Import jwtDecode

import styles from './LoginPage.module.css';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await httpClient.post('/auth/signin', { username, password });
            console.log('response : ', response);
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            const decodedToken = jwtDecode(response.data.token);
            if (decodedToken.role === 'STAFF') {
                navigate('/staff/products');
            } else if (decodedToken.role === 'CUSTOMER') {
                navigate('/customer/products');
            }
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed!');
        }
    };

    return (
        <>
            <Header />
            <div className={styles.login_container}>
                <h2 className={styles.h2}>Login</h2>
                <div className={styles.login}>
                    <form className={styles.Login_form} onSubmit={handleSubmit}>
                        <label className={styles.login_label}>Username</label>
                        <input
                            className={styles.login_input}
                            type="text"
                            placeholder="Your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className={styles.login_label}>Password</label>
                        <input
                            className={styles.login_input}
                            type="password"
                            placeholder="****"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="submit" className={styles.login_button}>
                            Login
                        </button>
                    </form>
                    <h5>Don't have an account?</h5>
                    <Link to="/signup" className={styles.link_button}>
                        Create an account
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LoginPage;
