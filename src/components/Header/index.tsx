import React from "react";
import {
    HeaderWrapper,
    HeaderTitlesWrapper,
    HeaderTitle,
    HeaderSubtitle
} from "./header.style";

const Header: React.FC = () => {
    return (
        <div className="header">
            <HeaderWrapper>
                <HeaderTitlesWrapper>
                    <HeaderTitle>
                        Bov Control
                    </HeaderTitle>
                    <HeaderSubtitle>
                        Controle de fazendas registradas
                    </HeaderSubtitle>
                </HeaderTitlesWrapper>
            </HeaderWrapper>
        </div>
    );
};

export default Header;
