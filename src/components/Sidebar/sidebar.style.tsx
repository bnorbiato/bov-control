// @ts-ignore
import styled from "styled-components";

export const SidebarWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    top: 0;
    left: 0;
    width: 150px;
    height: 100%;
    background-color: #ffffff;
    border-radius: 0 30px 0 0;
    padding: 20px 30px;
    z-index: 3;
    box-shadow: 5px 2px 10px #6b6b6b66;
`;

export const SidebarContent = styled.div`
    padding: 30px;
`;

export const SidebarTitle = styled.span`
    font-size: 14px;
    color: #2E8B57;
    margin-bottom: 10px;
`;