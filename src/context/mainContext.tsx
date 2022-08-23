import { createContext } from "react";

const MainContext = createContext({
    sideNavOpen: true,
    setSideNavOpen: (status) => {},
    isModalOpen: false,
    setIsModalOpen: (status) => {},
    status: "SUCCESS",
    setStatus: (stat) => {},
    showNavBarXs: false,
    setShowNavBarXs: (status) => {},
    openMoreInfo: false,
    setOpenMoreInfo: (status) => {},
    hasCloseEditModal: false,
    setHasCloseEditModal: (status) => {},
    removeHasCloseEditModal: (id) => {},
    addModalOpen: false,
    setAddModalOpen: (status) => {},
    userLocalization: '',
    setUserLocalization: (local) => {},
    hasAskedForGeo: false,
    setHasAskedForGeo: (local) => {},
});

export default MainContext;
