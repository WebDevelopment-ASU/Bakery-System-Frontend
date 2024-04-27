import React, { useState } from 'react';
function LoginPage(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className="container">
            <h2> Login </h2>
            <form className="Login_form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label htmlFor="password"> Password </label>
                <input
                    type="password"
                    placeholder="**********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="Submit"> Login </button>
            </form>
            <h5> Don't have an account?</h5>
            <button className="link-button" onClick={() => props.OnFormSwitch('signup')}>
                {' '}
                Create an account 
            </button>
        </div>
    );
}
export default LoginPage;
