import React, { useEffect } from "react";
import './scroll.css'

export default function ScrollIndicator(url){
 const [data, setData] = React.useState([]);
 const [loading, setLoading] = React.useState(false);
 const [errorMessage, setErrorMessage] = React.useState('');
 const [scrollPercentage, setScrollPercentage] = React.useState(0);

 async function fetchData(){
  try {
   setLoading(true);
   const response = await fetch('https://dummyjson.com/products?limit=100');
   const data = await response.json();

   if(data && data.products && data.products.length > 0){
    setData(data.products);
    setLoading(false);
   }
  } catch(e) {
   console.log(e);
   setErrorMessage(e.message);
  }
 }

 function handleScrollPercentage(){
  const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;

  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  setScrollPercentage((howMuchScrolled / height) * 100);
 }

 React.useEffect(() => {
  fetchData();
 },[url])

 React.useEffect(() => {
  window.addEventListener('scroll', handleScrollPercentage);

  return () => {
   window.removeEventListener('scroll', () => {})
  }
 },[]);

 console.log(data, scrollPercentage);

 if(errorMessage){
  return <div>Error occurred ! {errorMessage}</div>
 }

 if(loading) {
  return <div>Loading data ! Please wait</div>
 }

 return (
    <div className="container">

    <div className="top-container">
     <h1>Custom Scroll Indicator</h1>
     <div className="scroll-progress-tracking-container">
      <div className="scroll-progress-bar" style={{width :`${scrollPercentage}%`}}></div>
     </div>
    </div>
   <div className="data-container">
    {
     data && data.length > 0 ? 
     data.map(dataItem => <p>{dataItem.title}</p>)
     :null  
    }
   </div>
  </div>
 )
}