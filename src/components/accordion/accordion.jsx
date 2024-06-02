import data from "./data"
import React from "react"
import './styles.css'

export default function Accordion(){
 const [selected, setSelected] = React.useState(null);
 const [multipleSelection, setMultipleSelection] = React.useState(false);
 const [multiple, setMultiple] = React.useState([])

 function handleSingleSelection(id){
  setSelected(id === selected ? null : id);
 }

 function handleMultiSelection(id){
  let cpyMultiple = [...multiple];
  const idIndex = cpyMultiple.indexOf(id)

  if(idIndex === -1){
    cpyMultiple.push(id)
  } else{
    cpyMultiple.splice(idIndex, 1)
  }
  setMultiple(cpyMultiple)
 }
console.log(selected, multiple)

 return (
  <div className="wrapper">

    <button className="accordion-button" onClick={() => setMultipleSelection(!multipleSelection)}>
      Enable Multi Selection
      </button>

    <div className="accordion">

      {data && data.length > 0 ?

    data.map(dataItem => (
      <div className="item">

       <div onClick={
        multipleSelection ? 
        () => handleMultiSelection(dataItem.id) :
        () => handleSingleSelection(dataItem.id)
       } className="title">
        <h3>{dataItem.question}</h3>
        <span>+</span>
       </div>
        {multipleSelection ? 
        multiple.indexOf(dataItem.id) !== -1 && (<div className="content">{dataItem.answer}</div>)
      : selected === dataItem.id && (<div className="content">{dataItem.answer}</div>)}
      </div>
    )

    )

   : <h3>No data found</h3>}

    </div>
   
  </div>
 )
}