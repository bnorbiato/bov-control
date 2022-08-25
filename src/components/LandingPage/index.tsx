import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import {
    LandingPageWrapper,
    LandingPageLogo,
    LandingPageCTA
} from "./landingPage.style";
import Header from "../Header";

const LOGO = require("../../assets/images/logo.png");

const Landing: React.FC = () => {
    const history = useHistory();
    
    return (
        <LandingPageWrapper>
            <Header />
            <LandingPageLogo>
                <img
                    src={LOGO}
                    width='150px'
                    alt="Bov Control"
                />
            </LandingPageLogo>

            <LandingPageCTA>
                <Button
                     onClick={() => {
                        history.push("/dashboard");
                      }}
                >
                    Acessar a dashboard
                </Button>
            </LandingPageCTA>

        </LandingPageWrapper>
    );
};
export default Landing;
