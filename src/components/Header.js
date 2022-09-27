// basic header
import React from "react";
import styled from "styled-components";
import { TabsContext } from "../App.js";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #282c34;
    color: white;
    height: 35px;
`;

const HeaderButton = styled.div`
    display: flex;
    justify-content: center;
    min-width: 100px;
    background-color: #282c34;
    color: white;
    cursor: pointer;
    // underline active tab
    border-bottom: ${props => props.active ? '2px solid white' : 'none'};
    &:hover {
        background-color: #61dafb;
        color: black;
    }
`;

const Header = () => {
    
    const { tabs, updateTabs, activeTab, updateActiveTab } = React.useContext(TabsContext);
    return (
        <Container>
            {tabs.map((tab) => (
                <HeaderButton key={tab.id} onClick={() => updateActiveTab(tab)} active={tab === activeTab}>
                    {tab.title}
                </HeaderButton>
            ))}
        </Container>
    )
}

export default Header;