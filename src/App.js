import {
  Routes,
  Route
} from "react-router-dom";
import {Home, About , User} from './routes';
import Layout from './components/Layout';
import { falseData } from "./utils/db.js";
import React, { useState } from "react";

// create a context
export const TabsContext = React.createContext();


function App() {
  const [tabs, setTabs] = useState(falseData);
  const [activeTab, setActiveTab] = useState(tabs[0]);

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
