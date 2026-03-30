import { useState } from "react";
import Tabs from "./Tabs";
import TabContent from "./TabContent";

const TabsContainer = () => {

  const tabsData = [
    { id: 1, title: "Home", content: "Welcome to Home Page" },
    { id: 2, title: "About", content: "This is About Page" },
    { id: 3, title: "Services", content: "Our Services are listed here" },
    { id: 4, title: "Contact", content: "Contact us anytime" }
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <Tabs 
        tabs={tabsData} 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
      />

      <TabContent 
        tab={tabsData[activeTab]} 
      />
    </div>
  );
};

export default TabsContainer;