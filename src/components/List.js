import styled from "styled-components";
import Card from "./Card";
import {  Droppable, Draggable } from "react-beautiful-dnd";
import React from "react";


const Container = styled.div`
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

export default function List({ list, prefix }) {

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
                      <Card card={card} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          )}
      </Droppable>
    )
  }