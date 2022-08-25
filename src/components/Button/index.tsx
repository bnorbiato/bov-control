import React from "react";
import {
    ButtonWrapper,
    ButtonText
} from "./button.style";

interface ButtonProps {
    text: string;
}

const Button: React.FC<ButtonProps> = ({
    text
}) => {
    return (
        <ButtonWrapper>
        </ButtonWrapper>
    );
};

export default Button;