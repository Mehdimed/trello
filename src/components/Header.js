// basic header
import React from "react";
import styled from "styled-components";
import { TabsContext } from "../utils/context";


const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    background-color: #282c34;
    color: white;
    height: 60px;
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
    
    const db = React.useContext(TabsContext);
    return (
        <Container>
            {db.tabs.map((tab) => (
                <HeaderButton key={tab.id} onClick={() => db.updateActiveTab(tab)} active={tab === db.activeTab}>
                    {tab.title}
                </HeaderButton>
            ))}
            <HeaderButton onClick={() => db.addTab()}>+</HeaderButton>
        </Container>
    )
}

export default Header;