import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    };

    return (
        <div className="App">
            {currentForm === 'login' ? (
                <LoginPage OnFormSwitch={toggleForm} />
            ) : (
                <SignupPage OnFormSwitch={toggleForm} />
            )}
        </div>
    );
}

export default App;
