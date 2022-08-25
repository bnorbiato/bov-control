import React from "react";
import { Link } from "react-router-dom";

import {
    MenuWrapper,
    MenuItemText,
    MenuItemIcon
} from "./menuItem.style";

interface MenuItemProps {
    icon?: any;
    text: string;
    link?: string;
    from: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
    icon,
    text,
    link,
    from
}) => {
    return (
        <Link 
            to={`${link ? `/${from}${link}` : "#"}`}
        >
            <MenuWrapper>
                <MenuItemIcon>
                    {icon}
                </MenuItemIcon>

                <MenuItemText>
                    {text}
                </MenuItemText>
            </MenuWrapper>
        </Link>
    );
};

export default MenuItem;