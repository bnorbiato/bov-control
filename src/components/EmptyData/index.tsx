import React from "react";
import {
    EmptyDataWrapper,
    EmptyDataTitle,
} from "./emptyData.style";
import { GiFarmer } from "react-icons/gi";

interface EmptyDataProps {
    title: string;
}

const EmptyData: React.FC<EmptyDataProps> = ({
    title
}) => {
    return (
        <EmptyDataWrapper>
            <GiFarmer
                size={150}
                color={"#2E8B57"}
            />
            <EmptyDataTitle>
                {title}
            </EmptyDataTitle>
        </EmptyDataWrapper>
    );
};

export default EmptyData;