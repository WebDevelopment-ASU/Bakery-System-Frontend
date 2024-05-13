import React, { useState } from 'react';
import httpClient from '../../utils/httpClient';
import Header from '../../components/credentials/Credentials-Header';
import Footer from '../../components/credentials/Credentials-Footer';
import { Link, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

import styles from './SignupPage.module.css';

const SignUpPage = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('CUSTOMER');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await httpClient.post('/auth/signup', {
                username,
                email,
                password,
                role,
            });
            alert('Signup successful!');
            const token = response.data.token;
            localStorage.setItem('token', token);
            const decodedToken = jwtDecode(token);
            if (decodedToken.role === 'STAFF') {
                navigate('/staff/products');
            } else if (decodedToken.role === 'CUSTOMER') {
                navigate('/customer/products');
            }
        } catch (error) {
            console.error('Signup failed:', error);
            alert('Signup failed!');
        }
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.header2}>Sign Up</h2>
                <div className={styles.signup}>
                    <form className={styles.SignUp_form} onSubmit={handleSubmit}>
                        <label className={styles.signup_label}>Username</label>
                        <input
                            className={styles.signup_input}
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className={styles.signup_label}>Email</label>
                        <input
                            className={styles.signup_input}
                            type="email"
                            name="email"
                            placeholder="youremail@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <label className={styles.signup_label}>Password</label>
                        <input
                            className={styles.signup_input}
                            type="password"
                            name="password"
                            placeholder="****"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <label className={styles.signup_label}>Role</label>
                        <select className={styles.signup_input} value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="CUSTOMER">CUSTOMER</option>
                            <option value="STAFF">STAFF</option>
                        </select>
                        <button type="submit" className={styles.signup_button}>
                            Sign up
                        </button>
                    </form>
                    <h5 className={styles.text}>Already have an account?</h5>
                    <Link to="/login" className={styles.linkButton}>
                        Login
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignUpPage;
