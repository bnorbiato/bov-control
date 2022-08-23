import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { GoPrimitiveDot } from "react-icons/go";

import Menu from '../Menu';

interface SidebarProps {
    type: any | null;
}

const Sidebar: React.FC<SidebarProps> = ({ type }) => {
    return (
        <>
            <div className="sidebarBlock">
                <span>Controle de Fazendas</span>
                <ul>
                    <li>
                        <Menu
                            icon={
                                <AiOutlineClockCircle
                                    color="#222"
                                    size={18}
                                />
                            }
                            text="Marcar ponto"
                            from="dashboard"
                            link="/marcar"
                            hasKids={true}
                        />
                    </li>
                    <li>ß
                        <Menu
                            icon={
                                <GoPrimitiveDot color="#5850EC" size={18} />
                            }
                            text="Pontos"
                            from="dashboard"
                            link="/pontos"
                            hasKids={true}
                        />
                    </li>
                </ul>
            </div>
        </>
    );
};
export default Sidebar;
