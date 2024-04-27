import React, { useState } from 'react';
const SignupPage = (props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <div className="container">
            <h2> Sign Up </h2>
            <form className="SignUp_form" onSubmit={handleSubmit}>
            <lable htmlFor="username"> Username </lable>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                <lable htmlFor="email"> Email </lable>
                <input
                    type="email"
                    name="email"
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <lable htmlFor="Password"> Password </lable>
                     <input
                    type="password"
                    name="password"
                    placeholder="***********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     />
                
                     <button type="Submit"> Sign up </button>
            </form>
            <h5> Already have an account?</h5>
            <button className="link-button" onClick={() => props.OnFormSwitch('login')}>
                {' '}
                Login here{' '}
            </button>
        </div>
    );
};

export default SignupPage;
