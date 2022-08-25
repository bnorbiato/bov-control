import React from "react";
// @ts-ignore
import styled from "styled-components";

interface CardProps {
    title: string;
    subtitle: string;
    text: string;
    date: Date;
}

const CardWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    margin: 15px auto;
    border-bottom: 1px solid #2E8B57;
    border-radius: 2px;
    cursor: pointer;
`;

const CardTitle = styled.h4`
    padding: 0 0 5px 0;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #2E8B57;
`;

const CardTextWrapper = styled.div`
    padding: 0;
    margin: 0;
`;

const CardText = styled.p`
    font-size: 14px;
    padding: 0;
    margin: 0;
`;

const Card: React.FC<CardProps> = ({
    title,
    subtitle,
    text,
    date,
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