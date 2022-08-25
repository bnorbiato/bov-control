import React from "react";
import { Link } from "react-router-dom";
// @ts-ignore
import styled from "styled-components";

interface MenuItemProps {
    icon?: any;
    text: string;
    link?: string;
}

const MenuWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    position: relative;
    flex-direction: row;
`;

const MenuItemText = styled.p`
    text-decoration: none;
    color: #252F3F;
    font-size: 12px;
`;

const MenuItem: React.FC<MenuItemProps> = ({
    icon,
    text,
    link,
}) => {
    return (
        <Link 
            to={`${link}`}
        >
            <MenuWrapper>
                <div className="menuItemIcon">
                    {icon}
                </div>

                <MenuItemText>
                    {text}
                </MenuItemText>
            </MenuWrapper>
        </Link>
    );
};

export default MenuItem;