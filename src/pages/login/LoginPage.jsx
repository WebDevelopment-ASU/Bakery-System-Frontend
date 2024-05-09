import React, { useState } from 'react';
import httpClient from '../../utils/httpClient';
import Header from '../../components/Credentials-Header';
import Footer from '../../components/Credentials-Footer';
import { Link } from 'react-router-dom';

import styles from './LoginPage.module.css';

function LoginPage(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await httpClient.post('/auth/signin', { username, password });
            // print the response
            console.log('response : ', response);
            localStorage.setItem('token', response.data.token);
            alert('Login successful!');
            // Optionally redirect or change the component state upon successful login
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
