import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Dashboard }/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
