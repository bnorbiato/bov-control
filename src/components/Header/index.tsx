import React from "react";
// @ts-ignore
import styled from "styled-components";

const HeaderWrapper = styled.div`
    padding: 10px 20px;
    margin: 0;
    width: 100%;
    height: 50px;
    background-color: #2E8B57;
`;
const LOGO = require("../../assets/images/logo.png");

const Header: React.FC = () => {
    return (
        <div className="header">
            <HeaderWrapper>
                <img
                    src={LOGO}
                    width='50px'
                    alt="Bov Control"
                />
            </HeaderWrapper>
        </div>
    );
};

export default Header;
