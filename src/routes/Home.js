import React from "react";
import { TabsContext } from "../App.js";
import styled from "styled-components";
import List from "../components/List.js";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


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
        const sourceList = newTab.tab.find((list) => list.id.toString() === sourceId);
        const destinationList = newTab.tab.find((list) => list.id.toString() === destinationId);
        const [removed] = sourceList.list.splice(result.source.index, 1);
        destinationList.list.splice(result.destination.index, 0, removed);

        const newTabs = [...tabs].map((tab) => {
            if (tab.id === newTab.id) {
                return newTab;
            }
            return tab;
        });
        
        updateTabs(newTabs);


        
    };

    return (
      <Container>
        <Row>
        <DragDropContext onDragEnd={onCardDragEnd}>
          {activeTab.tab.map((item, index) => (
            <List key={item.id} list={item} prefix={item.id}/>
          ))}
        </DragDropContext>
        </Row>
      </Container>
    );
    
  }