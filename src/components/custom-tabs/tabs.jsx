import React from "react";
import { useState } from "react";
import './tabs.css'

export default function Tabs({tabsContent, onChange}){
 const [currentTabsIndex, setCurrentTabsIndex] = useState(0);

 function handleOnClick(getCurrentIndex){
  setCurrentTabsIndex(getCurrentIndex);
  // onChange(getCurrentIndex);
 }

 return (
  <div className="wrapper">

   <div className="heading">
    {tabsContent.map((tabItem, index) => (
    <div 
      className={`tab-item ${index === currentTabsIndex ? 'active' : ''}`} 
      onClick={() => handleOnClick(index)} key={tabItem.label}>
     <span className="label">{tabItem.label}</span>
    </div>
    ))
    }
   </div>

   <div className="content" style={{color: 'red'}}>
    {tabsContent[currentTabsIndex] && tabsContent[currentTabsIndex].content}
   </div>
  </div>
 )
}