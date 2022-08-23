import React, {
    useEffect,
    useState,
    useContext
} from "react";
import {
    Switch,
    Route,
    useRouteMatch,
    Link
} from "react-router-dom";
import {
    BsChevronDoubleRight,
    BsChevronDoubleLeft
} from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

import Sidebar from "../../components/Sidebar";
import SidebarSkeleton from "../../components/skeletons/Sidebar";
import MainContext from "../../context/mainContext";
import { usePosition } from "../../hooks/usePosition";


const LOGO = require("../../assets/images/logo.png");

interface DashboardProps {
    match: any;
}

const Dashboard: React.FC<DashboardProps> = ({ match }) => {
    const {
        sideNavOpen,
        setSideNavOpen,
        isModalOpen,
        showNavBarXs,
        setShowNavBarXs,
        setUserLocalization,
    } = useContext(MainContext);

    const [isLoadingAll, setIsLoadingAll] = useState(true);

    let { path } = useRouteMatch();

    let watch = true;
    const { error, position } = usePosition(watch);

    useEffect(() => {
        if (position && position !== {}) {
            setUserLocalization(Object.values(position));
        }
    }, [position]);

    useEffect(() => {
        document.title = "Bov Control  - Dashboard";
    }, []);

    return (
        <div className="dashboardWrapper">
            <>
                <div className="dashboardContent">
                    <div
                        className={`contentSidebar ${!sideNavOpen ? "sidebarClosed" : ""
                            } ${showNavBarXs ? "sidebarFullXs" : ""}`}
                    >
                        <div
                            className="menuToggle"
                            onClick={() => setSideNavOpen(!sideNavOpen)}
                        >
                            {!sideNavOpen ? (
                                <BsChevronDoubleRight
                                    color="#000"
                                    size={20}
                                />
                            ) : (
                                <BsChevronDoubleLeft
                                    color="#000"
                                    size={20}
                                />
                            )}
                        </div>
                        {showNavBarXs && (
                            <div
                                className="closeXsSide"
                                onClick={() => setShowNavBarXs(false)}
                            >
                                <AiFillCloseCircle size={30} color="red" />
                            </div>
                        )}
                        <div className="sidebarLogo">
                            <Link to="/">
                                <img
                                    src={LOGO}
                                    alt="Marca "
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </>
        </div>
    );
};
export default Dashboard;
