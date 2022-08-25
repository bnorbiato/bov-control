import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Landing from './components/LandingPage';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" component={Dashboard} />
        </BrowserRouter>
    );
};

export default Routes;