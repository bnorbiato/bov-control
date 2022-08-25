// @ts-ignore
import styled from "styled-components";

export const CardWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;
    padding: 20px;
    margin: 15px auto;
    border: 1px solid #2E8B57;
    border-radius: 30px 0 30px 0;
    cursor: pointer;
`;

export const CardTitle = styled.h4`
    padding: 0 0 5px 0;
    margin: 0;
    font-size: 18px;
    font-weight: 600;
    color: #2E8B57;
`;

export const CardTextWrapper = styled.div`
    padding: 0;
    margin: 0;
`;

export const CardText = styled.p`
    font-size: 14px;
    padding: 0;
    margin: 0;
`;