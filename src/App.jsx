import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/login/LoginPage';
import SignupPage from './pages/signup/SignupPage';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/" exact component={LoginPage} />
            </Switch>
        </Router>
    );
}

export default App;
