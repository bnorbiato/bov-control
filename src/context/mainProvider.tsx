import React from "react";

import MainContext from './mainContext';
import useStorage from '../utils/useStorage';

const MainProvider = ({ children }) => {
    const [sideNavOpen, setSideNavOpen] = useStorage("sidebarOpen");
    const [isModalOpen, setIsModalOpen] = useStorage("modal");
    const [status, setStatus] = useStorage("status");
    const [showNavBarXs, setShowNavBarXs] = useStorage("sideNavXXS");
    const [openMoreInfo, setOpenMoreInfo] = useStorage("openMoreInfoModal");
    const [addModalOpen, setAddModalOpen] = useStorage("openAddModal");
    const [
        hasCloseEditModal,
        setHasCloseEditModal,
        removeHasCloseEditModal,
    ] = useStorage("closedModal");
    const [userLocalization, setUserLocalization] = useStorage("local");
    const [hasAskedForGeo, setHasAskedForGeo] = useStorage("hasAskedForGeo");

    return (
        <MainContext.Provider
            value={{
                sideNavOpen,
                setSideNavOpen,
                isModalOpen,
                setIsModalOpen,
                status,
                setStatus,
                showNavBarXs,
                setShowNavBarXs,
                openMoreInfo,
                setOpenMoreInfo,
                hasCloseEditModal,
                setHasCloseEditModal,
                removeHasCloseEditModal,
                addModalOpen,
                setAddModalOpen,
                userLocalization,
                setUserLocalization,
                hasAskedForGeo,
                setHasAskedForGeo
            }}
        >
            {children}
        </MainContext.Provider>
    );
};

export default MainProvider;