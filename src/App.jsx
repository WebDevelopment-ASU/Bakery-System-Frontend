import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ProfilePage from './pages/profile/ProfilePage';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/profile" component={ProfilePage} />
            </Switch>
        </Router>
    );
}

export default App;
