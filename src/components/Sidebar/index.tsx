import React from "react";
// @ts-ignore
import styled from "styled-components";
import { GiCow } from "react-icons/gi";
import { AiOutlinePlus } from "react-icons/ai";

import MenuItem from "../MenuItem";

const LOGO = require("../../assets/images/logo.png");

const SidebarWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    width: 90px;
    height: 100%;
    background-color: #ffffff;
    border-radius: 0 30px 0 0;
    padding: 10px 30px;
    z-index: 3;
    box-shadow: 5px 2px 10px #6b6b6b66;
`;

const SidebarContent = styled.div`
    padding: 30px;
`;

const SidebarTitle = styled.span`
    font-size: 14px;
    color: rgba(0, 0, 0, 0.49);
    margin-bottom: 10px;
`;

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
                />
            </SidebarContent>
        </SidebarWrapper>
    );
};

export default Sidebar;