import React from "react";
import {
    TextWrapper,
    HeadlineText,
    Text
} from "./headline.style";

interface HeadlineProps {
    headline: string;
    text: string;
}

const Headline: React.FC<HeadlineProps> = ({
    headline,
    text
}) => {
    return (
        <TextWrapper>
            <HeadlineText>
                {headline}
            </HeadlineText>

            <Text>
                {text}
            </Text>
        </TextWrapper>
    );
};

export default Headline;