import {
  Routes,
  Route
} from "react-router-dom";
import {Home, About , User} from './routes';
import Layout from './components/Layout';
import React, { useEffect, useState } from "react";

// create a context
export const TabsContext = React.createContext();


function App() {
  const [tabs, setTabs] = useState([]);
  const [activeTab, setActiveTab] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/tabs")
      .then((res) => res.json())
      .then((data) => {
        updateTabs(data);
        updateActiveTab(data[0]);
      });

  }, []);

  const updateActiveTab = (tab) => {
    setActiveTab(tab);
  };

  function updateTabs(tabs) {
    setTabs(tabs);
  };

  function addTab() {
    const newTab = {
      title: "New Tab",
      lists: [
        {
          id: Math.floor(Math.random() * 1000),
          title: "List 1",
          cards: [
            {
              id: Math.floor(Math.random() * 1000),
              title: "Card 1",
              description: "Description 1",
            }
          ]
        }
      ]
    };
    fetch("http://localhost:3000/tabs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTab),
    })
      .then((res) => res.json())
      .then((data) => {
        updateTabs([...tabs, data]);
        updateActiveTab(data);
      });
  }

  function deleteTab(tab) {
    fetch(`http://localhost:3000/tabs/${tab.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const newTabs = [...tabs].filter((item) => item.id !== tab.id);
        updateTabs(newTabs);
        updateActiveTab(newTabs[0]);
      });
  }



  function addList(tab) {
    const newTab = { ...tab };
    const listId = Math.floor(Math.random() * 1000);
    const newCard = {
      id: listId,
      title: `List ${listId}`,
      cards: [
        {
          id: Math.floor(Math.random() * 1000),
          title: `Card 1`,
          description: `Description 1`,
        }
      ],
    };
    newTab.lists.push(newCard);
    fetch(`http://localhost:3000/tabs/${newTab.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTab),
    }).then(() => {
      updateTabs([...tabs].map((item) => {
        if (item.id === tab.id) {
          return newTab;
        }
        return item;
      }));
      updateActiveTab(newTab);
    })
  }

  function deleteList(list) {
    const newTab = { ...activeTab };
    newTab.lists = newTab.lists.filter((item) => item.id !== list.id);
    
    fetch(`http://localhost:3000/tabs/${newTab.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTab),
    }).then(()=> {
      updateTabs([...tabs].map((item) => {
        if (item.id === activeTab.id) {
          return newTab;
        }
        return item;
      }));
      updateActiveTab(newTab);
    })
  }


  function addCard(list) {
    const newTab = { ...activeTab };
    const newList = newTab.lists.find((item) => item.id === list.id);
    // generate a random id
    const cardId = Math.floor(Math.random() * 1000);
    const newCard = {
      id: cardId,
      title: `Card ${cardId}`,
      description: `Description ${cardId}`,
    };
    newList.cards.push(newCard);
    fetch(`http://localhost:3000/tabs/${newTab.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTab),
    }).then(() => {
      updateTabs([...tabs].map((item) => {
        if (item.id === newTab.id) {
          return newTab;
        }
        return item;
      }));
      updateActiveTab(newTab);
    })
  }

  function deleteCard(card , listParent) {
    const newTab = { ...activeTab };
    const newList = newTab.lists.find((item) => item.id === listParent.id);
    newList.cards = newList.cards.filter((item) => item.id !== card.id);
    
    fetch(`http://localhost:3000/tabs/${newTab.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTab),
    }).then(()=> {
      updateTabs([...tabs].map((item) => {
        if (item.id === newTab.id) {
          return newTab;
        }
        return item;
      }));
      updateActiveTab(newTab);
    })
  }




  return (
    <TabsContext.Provider value={{ tabs, updateTabs , activeTab, updateActiveTab, addTab, deleteTab, addList, deleteList, addCard, deleteCard }}>
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/user" element={<User />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </TabsContext.Provider>
  );
}

export default App;
