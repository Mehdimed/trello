import React from "react";
import { TabsContext } from "../App.js";
import styled from "styled-components";
import List from "../components/List.js";
import { DragDropContext } from "react-beautiful-dnd";


const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Row = styled.div`
    display: flex;
    flex-direction: row;
`;

export default function Home() {

    const { tabs, updateTabs, activeTab } = React.useContext(TabsContext);

    const onCardDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        const newTab = { ...activeTab };
        const sourceId = result.source.droppableId.split("-")[1];
        const destinationId = result.destination.droppableId.split("-")[1];        
        const sourceList = newTab.lists.find((list) => list.id.toString() === sourceId);
        const destinationList = newTab.lists.find((list) => list.id.toString() === destinationId);
        const [removed] = sourceList.cards.splice(result.source.index, 1);
        destinationList.cards.splice(result.destination.index, 0, removed);

        const newTabs = [...tabs].map((tab) => {
            if (tab.id === newTab.id) {
                return newTab;
            }
            return tab;
        });
        
        updateTabs(newTabs);

        // make a post request to update the data
        fetch(`http://localhost:3000/tabs/${newTab.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTab),
        });
        
    };

    return (
      <Container>
        <Row>
        <DragDropContext onDragEnd={onCardDragEnd}>
          {activeTab.lists && activeTab.lists.map((item, index) => (
            <List key={item.id} list={item} prefix={item.id}/>
          ))}
        </DragDropContext>
        </Row>
      </Container>
    );
    
  }