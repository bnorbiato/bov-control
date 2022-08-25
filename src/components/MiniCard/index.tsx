import React from "react";
import {
    MiniCardWrapper,
    MiniCardTitle,
    MiniCardTextWrapper,
    MiniCardText
} from "./miniCard.style";

interface MiniCardProps {
    title: string;
    subtitle: string;
    text: string;
    date: Date;
    numberOfCows: number;
}

const MiniCard: React.FC<MiniCardProps> = ({
    title,
    subtitle,
    text,
    date,
    numberOfCows,
}) => {
    return (
        <MiniCardWrapper>
            <MiniCardTitle>
                {title}
            </MiniCardTitle>
            <MiniCardTextWrapper>
                <MiniCardText>
                    {subtitle}
                </MiniCardText>

                <MiniCardText>
                    Cidade: {text}
                </MiniCardText>

                <MiniCardText>
                    Data de criação: {date}
                </MiniCardText>

                <MiniCardText>
                    Cabeças de gado: {numberOfCows}
                </MiniCardText>
            </MiniCardTextWrapper>
        </MiniCardWrapper>
    );
};

export default MiniCard;