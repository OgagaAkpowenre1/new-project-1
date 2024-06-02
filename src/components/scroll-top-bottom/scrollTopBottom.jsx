import useFetch from "../usefetch/fetch";
import React from "react";

export default function ScrollTopBottom(){
 const { data, error, pending } = useFetch(
		"https://dummyjson.com/products?limit=100",
		{}
 ); 

 const bottomRef = React.useRef(null);

 function scrollToTop(){
  window.scrollTo({top: 0, left : 0, behavior: "smooth"})
 };

 function scrollToBottom(){
  bottomRef.current.scrollIntoView({behavior : 'smooth'})
 }

 console.log(data);
 return (
		<div>
			<h1>Scroll To Top and Bottom Feature</h1>
			<h3>This is the top section</h3>
			<button onClick={scrollToBottom}>Scroll to bottom</button>
			<ul style={{ listStyleType: "none" }}>
				{data && data.products && data.products.length
					? data.products.map((item) => <li>{item.title}</li>)
					: null}
			</ul>
			<button onClick={scrollToTop}>Scroll to top</button>
      <div ref={bottomRef}></div>
			<h3>This is the bottom section</h3>
		</div>
 );
}