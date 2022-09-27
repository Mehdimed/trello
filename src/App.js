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

  return (
    <TabsContext.Provider value={{ tabs, updateTabs , activeTab, updateActiveTab }}>
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
