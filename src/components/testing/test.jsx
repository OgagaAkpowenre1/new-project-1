import React, { useState } from "react";

export default function Test(){
 const [array, setArray] = useState([]);
 const [count, setCount] = useState(0)

 function handleClick(){
  setCount(prevCount => prevCount + 1);
  if(count > 15) setCount(0);
 }

 return (
		<div>
			<h1>Hi. I'm just here to let you know I work.</h1>
			<button onClick={handleClick}>Press me.</button>
			<h1>{count <= 10 ? count : 'Stop pressing me! It\'s useless! Nothing will really change! '}</h1>
		</div>
 );
}