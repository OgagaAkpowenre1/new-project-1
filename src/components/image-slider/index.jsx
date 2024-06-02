import React from "react";
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './styles.css'

export default function ImageSlide({url,page = 1, limit = 10}){
 const [images, setImages] = React.useState([]);
 const [currentSlide, setCurrentSlide] = React.useState(0);
 const [errorMsg, setErrorMsg] = React.useState(null);
 const [loading, setLoading] = React.useState(false);

 async function fetchImages(getUrl){
  try{
   setLoading(true);

    const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
    const data = await response.json();

    if(data){
     setLoading(false);
     setImages(data);
    }
  } catch(e){
   setErrorMsg(e.message);
   setLoading(false);
  }
 }

 function handlePrevious(){
   setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
 }

 function handleNext(){
   setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
 }
 console.log(images)

 React.useEffect(() => {
   if(url !== "") fetchImages(url);
 },[url])

 if(loading){
  return <div>Loading data! Please wait!</div>
 }

 if(errorMsg !== null){
  return <div>An error has occurred! {errorMsg}</div>
 }

 return (
  <div className="container">
    <BsArrowLeftCircleFill className="arrow left-arrow" onClick={handlePrevious}/>
    {images && images.length 
    ? images.map((ImageItem,index) => (
       <img 
        key={ImageItem.id}
        alt={ImageItem.download_url}
        src={ImageItem.download_url}
        className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
       />
     ))
    : null}
    <BsArrowRightCircleFill className="arrow right-arrow" onClick={handleNext}/>
    <span className="circle-indicators">
      {images && images.length ? 
       images.map((_,index) => 
       <button
       key={index}
       className={currentSlide === index ? 
        "current-indicator" : 
        "current-indicator inactive-indicator"}
        onClick={() => setCurrentSlide(index)}
       ></button>
       ): null
     }
    </span>
  </div>
 )
}