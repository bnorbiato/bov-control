import React from "react";
import {
    CardWrapper,
    CardTitle,
    CardTextWrapper,
    CardText
} from "./card.style";

interface CardProps {
    title: string;
    subtitle: string;
    text: string;
    date: Date;
}

const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    text,
    date
}) => {
    return (
        <CardWrapper>
            <CardTitle>
                {title}
            </CardTitle>
            <CardTextWrapper>
                <CardText>
                    {subtitle}
                </CardText>

                <CardText>
                    Cidade: {text}
                </CardText>

                <CardText>
                    Data de criação: {date}
                </CardText>
            </CardTextWrapper>
        </CardWrapper>
    );
};

export default Card;