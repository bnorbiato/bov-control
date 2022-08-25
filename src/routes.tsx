import React from 'react';
import {
    BrowserRouter,
    Route
} from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Dashboard} />
        </BrowserRouter>
    );
};

export default Routes;
