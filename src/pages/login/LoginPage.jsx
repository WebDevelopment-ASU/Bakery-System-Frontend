import React, { useState } from 'react';
import Header from '../../components/Credentials-Header';
import Footer from '../../components/Credentials-Footer';

import styles from './LoginPage.module.css';

function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <>
            <Header />
            <div className={styles.login_container}>
                <h2 className={styles.h2}> Login </h2>
                <div className={styles.login}>
                    <form className="Login_form" onSubmit={handleSubmit}>
                        <label className={styles.login_label}>Email</label>
                        <input
                            className={styles.login_input}
                            type="email"
                            placeholder="youremail@gmail.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label className={styles.login_label}> Password </label>
                        <input
                            className={styles.login_input}
                            type="password"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type="Submit" className={styles.login_button}>
                            {' '}
                            Login{' '}
                        </button>
                    </form>
                    <h5> Don't have an account?</h5>
                    <button className={styles.link_button} onClick={() => props.OnFormSwitch('signup')}>
                        {' '}
                        Create an account
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default LoginPage;
