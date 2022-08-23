import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";

import MainContext from '../../context/mainContext';

interface MenuProps {
    icon?: any;
    text: string;
    link?: string;
    from: string;
    hasArrow?: boolean;
    hasKids?: boolean;
}

const Menu: React.FC<MenuProps> = ({
    icon,
    text,
    link,
    from,
    hasArrow = true,
    hasKids = false,
}) => {
    const { sideNavOpen, setShowNavBarXs } = useContext(MainContext);

    const linkClicked = () => {
        setShowNavBarXs(false);
    };

    return (
        <Link to={`${link ? `/${from}${link}` : "#"}`} onClick={linkClicked}>
            <div
                className={`link__wrapper ${
                    !sideNavOpen ? "link__reduced" : ""
                }`}
            >
                <div className="link__icon">{icon}</div>

                <div className="link__text">
                    <p>{text}</p>
                </div>

                {hasArrow && (
                    <div className="link__arrow">
                        <BiChevronRight color="#222222a1" size={18} />
                    </div>
                )}
            </div>
        </Link>
    );
};
export default Menu;
