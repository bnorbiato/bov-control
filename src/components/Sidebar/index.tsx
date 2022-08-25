import React from "react";
import { GiCow } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

import MenuItem from "../MenuItem";
import {
    SidebarWrapper,
    SidebarContent,
    SidebarTitle
} from "./sidebar.style";

const LOGO = require("../../assets/images/logo.png");

const Sidebar: React.FC = () => {
    return (
        <SidebarWrapper>
            <img
                src={LOGO}
                width='50px'
                alt="Bov Control"
            />
            <SidebarContent>
                <SidebarTitle>
                    Controle
                </SidebarTitle>

                <MenuItem
                    icon={
                        <GiCow
                            color="#222"
                            size={18}
                        />
                    }
                    text="Fazendas"
                    link="/"
                    from="dashboard"
                />

                <MenuItem
                    icon={
                        <AiOutlinePlus
                            color="#222"
                            size={18}
                        />
                    }
                    text="Adicionar"
                    link="/adicionar"
                    from="dashboard"
                />
            </SidebarContent>
        </SidebarWrapper>
    );
};

export default Sidebar;