import React, { useState } from 'react';
import Header from '../../components/Credentials-Header';
import Footer from '../../components/Credentials-Footer';

import styles from './SignupPage.module.css';

const SignupPage = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <>
            <Header />
            <div className={styles.container}>
                <h2 className={styles.header2}> Sign Up </h2>
                <div className={styles.signup}>
                    <form className={styles.SignUp_form} onSubmit={handleSubmit}>
                        <lable className={styles.signup_label}> Username </lable>
                        <input
                            className={styles.signup_input}
                            type="text"
                            name="username"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <lable className={styles.signup_label}> Email </lable>
                        <input
                            className={styles.signup_input}
                            type="email"
                            name="email"
                            placeholder="youremail@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <lable className={styles.signup_label}> Password </lable>
                        <input
                            className={styles.signup_input}
                            type="password"
                            name="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button type="Submit" className={styles.signup_button}>
                            {' '}
                            Sign up{' '}
                        </button>
                    </form>
                    <h5> Already have an account?</h5>
                    <button className={styles.linkButton} onClick={() => props.OnFormSwitch('login')}>
                        {' '}
                        Login here{' '}
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default SignupPage;
