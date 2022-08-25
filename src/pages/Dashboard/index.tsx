import React from "react";
import {
    useRouteMatch,
    Switch,
    Route
} from "react-router-dom";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import AddChecklist from "./AddChecklist";
import Checklists from "./Checklists";
import ChecklistDetails from "./ChecklistDetails";
import {
    DashboardWrapper,
    DashboardContent,
    ContentMain
} from "./dashboard.style";


const Dashboard: React.FC = () => {
    let { path } = useRouteMatch();

    return (
        <>
            <DashboardWrapper>
                <DashboardContent>
                    <SideBar />
                    <ContentMain>
                        <Header />
                        <Switch>
                            <Route
                                path={path}
                                exact
                                component={Checklists}
                            />

                            <Route
                                path={`${path}/adicionar`}
                                exact
                                component={AddChecklist}
                            />

                            <Route
                                path={`${path}/checklist/:_id`}
                                exact
                                component={ChecklistDetails}
                            />
                        </Switch>
                    </ContentMain>

                </DashboardContent>
            </DashboardWrapper>
        </>
    );
};
export default Dashboard;
