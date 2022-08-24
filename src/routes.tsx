import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ChecklistList from './components/list';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ ChecklistList }/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
