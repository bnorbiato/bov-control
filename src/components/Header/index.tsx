import React from "react";
// @ts-ignore
import styled from "styled-components";

const HeaderWrapper = styled.div`
    width: 100%;
    position: relative;
    top: 0;
    margin: 0 0 20px 0;
    padding: 10px 0;
    background-color: #2E8B57;
`;

const HeaderTitlesWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 0 20px;
`;

const HeaderTitle = styled.h2`
    padding: 0;
    margin: 0;
    color: #ffffff;
`;

const HeaderSubtitle = styled.p`
    padding: 0;
    margin: 0;
    color: #ffffff;
`;

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
