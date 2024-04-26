import React, { useState } from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';

function App() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName); // Correctly use the state setter function
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
