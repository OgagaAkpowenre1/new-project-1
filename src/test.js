import React from "react"

export default function Test(){
 const list = [{id:1},{id:2},{id:3},{id:4},{id:5},{id:6}]
 const [counter, setCounter] = React.useState(list[0].id)
 const [array, setArray] = React.useState([...list])

 function count(){
  setCounter(prevCounter => prevCounter + 1);
 }

 function addEntry(){
  setArray(prevArray => [...prevArray, {id: (prevArray.length + 1)}])
 }


 return (
  <div>
   <p>hello there</p>
   <button onClick={addEntry}>Press me</button>
   {array.map(listItem => <p>{listItem.id}</p>)}
   <p>{counter}</p>
  </div>
 )
}