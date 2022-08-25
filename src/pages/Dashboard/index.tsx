import React from "react";
import {
    useRouteMatch,
    Switch,
    Route
} from "react-router-dom";
// @ts-ignore
import styled from "styled-components";

import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import AddChecklist from "./AddChecklist";
import Checklists from "./Checklists";

const DashboardWrapper = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

const DashboardContent = styled.div`
    position: relative;
`;

const ContentMain = styled.div`
    overflow-x: auto;
    margin-left: 120px;
    background-color: #F4F5F9;
    height: 100vh;
    width: calc(100% - 70px);
    position: relative;
`;

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
                                path="/"
                                exact
                                component={Checklists}
                            />

                            <Route
                                path="/adicionar"
                                component={AddChecklist}
                            />
                        </Switch>
                    </ContentMain>

                </DashboardContent>
            </DashboardWrapper>
        </>
    );
};
export default Dashboard;
