import React from "react";
import './styles.css';
import MenuItem from "./menu-item";

export default function MenuList({ list = [] }){
 return(
  <ul className="menu-list-container">
   {list && list.length 
    ? list.map((listItem) =>  { return <MenuItem item={listItem}/> }): null
   }
  </ul>
 )
}