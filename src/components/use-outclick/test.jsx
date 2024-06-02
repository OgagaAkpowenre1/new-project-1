import { useRef, useState } from "react"
import useOutsideClick from "./outclick";

export default function UseOutsideClick(){
 const [showContent, setShowContent] = useState(false);
 const ref = useRef();
 useOutsideClick(ref, () => setShowContent(false));

 return (
  <div>
   {showContent ? 
   <div ref={ref}>
    <h1>This is a random content!</h1>
    <p>Please click outside of this area to close this message.</p>
   </div> 
   : <button onClick={() => setShowContent(true)}>Show Content</button>}
  </div>
 )
}