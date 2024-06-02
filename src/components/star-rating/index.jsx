import React from "react";
import { FaStar } from 'react-icons/fa'
import './styles.css'

export default function StarRating({noOfStars = 5}){
 const [hover, setHover] = React.useState(0);
 const [rating, setRating] = React.useState(0);

 function handleClick(getCurrentIndex){
  console.log(getCurrentIndex);
  setRating(getCurrentIndex)
 }

 function handleMouseMove(getCurrentIndex){
  console.log(getCurrentIndex);
  setHover(getCurrentIndex)
 }

 function handleMouseLeave(){
  setHover(rating)
 }

 return(
  <div className="star-rating">
   { [...Array(noOfStars)].map((_,index) => {
    index += 1;

    return <FaStar 
     key={index}
     className={index <= (hover || rating) ? "active" : "inactive"}
     onClick={() => handleClick(index)}
     onMouseMove={() => handleMouseMove(index)}
     onMouseOut={() => handleMouseLeave()}
     size={40}
    />
   })}
  </div>
 )
}