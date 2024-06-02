import React, { useState } from "react";

export default function ScrollToSection(){
 const [id, setId] = useState(0)
 const ref = React.useRef();

 const data = [
		{
			label: "First Card",
			style: {
				width: "100%",
				height: "600px",
				background: "red",
			},
		},
		{
			label: "Second Card",
			style: {
				width: "100%",
				height: "600px",
				background: "grey",
			},
		},
		{
			label: "Third Card",
			style: {
				width: "100%",
				height: "600px",
				background: "blue",
			},
		},
		{
			label: "Fourth Card",
			style: {
				width: "100%",
				height: "600px",
				background: "green",
			},
		},
		{
			label: "Fifth Card",
			style: {
				width: "100%",
				height: "600px",
				background: "orange",
			},
		},
 ];

 function handleId(place){
  setId(place)
 }

 function handleScrollToSection(){
  let pos = ref.current.getBoundingClientRect().top

  window.scrollTo({
   top: pos,
   behavior: 'smooth'
  })
 }

 return (
		<div>
			<h1>Scroll To A Particular Section</h1>
			<button onClick={handleScrollToSection}>Scroll To Section</button>
			<button onClick={() => handleId(0)}>1st section</button>
			<button onClick={() => handleId(1)}>2nd section</button>
			<button onClick={() => handleId(2)}>3rd section</button>
			<button onClick={() => handleId(3)}>4th section</button>
			<button onClick={() => handleId(4)}>5th section</button>
			{data.map((item, index) => (
				<div ref={index === id ? ref : null} style={item.style}>
					{item.label}
				</div>
			))}
		</div>
 );
}