import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Checklists from './pages/Dashboard/Checklists';
import ChecklistDetails from './pages/Dashboard/ChecklistDetails';
import AddChecklist from './pages/Dashboard/AddChecklist';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={ Checklists }/>
                <Route path="/checklist/:_id" component={ ChecklistDetails }/>
                <Route path="/add" component={ AddChecklist }/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
