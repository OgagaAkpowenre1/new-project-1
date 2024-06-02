import React from "react";
import './styles.css';
import MenuList from "./menu-list";

export default function TreeView({ menu = [] }){
 return(
  <div className="tree-view-container">
   <MenuList list={menu}/>
  </div>
 )
}