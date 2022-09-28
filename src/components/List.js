import styled from "styled-components";
import Card from "./Card";
import {  Droppable, Draggable } from "react-beautiful-dnd";
import React from "react";
import { TabsContext } from "../utils/context";
import { Trash } from "phosphor-react";




const Container = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #d9d9d9;
    border-radius: 15px;
    min-height: 50px;
    height: fit-content;
    min-width: 200px;
    padding: 10px;
    margin: 10px;
`;

const Title = styled.div`
    font-size: 17px;
    font-weight: 600;
    margin-bottom: 10px;
`;

const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    min-width: 100px;
    height: 20px;
    border-radius: 10px;
    background-color: #a2a2a2;
    color: #232323;
    cursor: pointer;
    &:hover {
        background-color: #61dafb;
        color: black;
    }
`;

const trashStyle = {
  color: 'red',
  position: "absolute",
  right: "5px",
  top: "10px",
  cursor: "pointer",
}

export default function List({ list, prefix }) {

  const db = React.useContext(TabsContext);

    return (
        
        <Droppable droppableId={`cards-${prefix}`}>
        {(provided, snapshot) => (
            <Container
              key={list.id}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
                <Title>{list.title}</Title>
              {list.cards.map((card, index) => (
                <Draggable
                  key={card.id}
                  draggableId={card.id.toString()}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card card={card} parent={list}/>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
              <AddButton onClick={() => db.addCard(list)}>Add Card</AddButton>
              <Trash style={trashStyle} size="24px" onClick={() => db.deleteList(list)}/>
            </Container>
          )}
      </Droppable>
    )
  }