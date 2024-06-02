import React from "react";
import './styles.css';
import MenuList from "./menu-list";
import {FaMinus, FaPlus} from 'react-icons/fa';

export default function MenuItem({item}){
 const [displayCurrentChildren, setDisplayCurrentChildren] = React.useState({});

 function handleCurrentChildren(getCurrentLabel){
  setDisplayCurrentChildren({...displayCurrentChildren,
   [getCurrentLabel] : !displayCurrentChildren[getCurrentLabel]})
 }

 console.log(displayCurrentChildren)

 return(
  <li>

   <div className="item-container">

    <p>{item.label}</p>

    {item && item.children && item.children.length > 0 
    ? <span onClick={()=> handleCurrentChildren(item.label)}>
     {displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25}/> : <FaPlus color="#fff" size={25}/>}
    </span> 
    : null}
   </div>

   {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ?
   <MenuList list={item.children}/>
   : null }
  </li>
 )
}