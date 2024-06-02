import useWindowResize from "./resize"

export default function UseWindowResize(){
 const windowSize = useWindowResize();

 const { height, width } = windowSize

 return (
  <div>
   <h1>Use Window Resize Hook</h1>
   <p>Width is {width}</p>
   <p>Height is {height}</p>
  </div>
 )
}