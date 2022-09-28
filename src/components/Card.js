import styled from "styled-components";
import { Backspace } from "phosphor-react";
import React from "react";
import { TabsContext } from "../App";

const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #ffffff;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 15px;
`;

const Title = styled.div`
    font-size: 12px;
    font-weight: 600;
`;

const Description = styled.div`
    font-size: 10px;
    font-weight: 400;
`;

const trashStyle = {
  color: 'red',
  position: "absolute",
  right: "5px",
  top: "10px",
  cursor: "pointer",
}


export default function Card({ card, parent }) {

  const { deleteCard } = React.useContext(TabsContext);

    return (
      <Container>
        <Title>{card.title}</Title>
        <Description>{card.description}</Description>
        {/* red cross to delete the card */}
        <Backspace style={trashStyle} onClick={() => deleteCard(card, parent)}/>
      </Container>
    )
  }