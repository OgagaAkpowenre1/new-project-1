import React from "react"

export default function ColorGen(){
 const [typeOf, setTypeOf] = React.useState('hex');
 const [color, setColor] = React.useState('#000000');

 function randomColorUtility(length){
  return Math.floor(Math.random() * length);
 }

 function randomHexColor(){
  const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  let hexColor = "#";

  for(let i = 0; i < 6; i++){
   hexColor += hex[randomColorUtility(hex.length)]
  }
  setColor(hexColor)
 }

 function randomRgbColor(){
  const r = randomColorUtility(256);
  const g = randomColorUtility(256);
  const b = randomColorUtility(256);
  setColor(`rgb(${r},${g},${b})`);
 }

 React.useEffect(() => {
   if(typeOf === 'rgb') randomRgbColor();
     else randomHexColor();
 }
 ,[typeOf])

 return (
  <div style={{
   width: '100vw',
   height: '100vh',
   background: color
  }}>
   <button onClick={() => setTypeOf('hex')}>Generate Hex Color</button>

   <button onClick={() => setTypeOf('rgb')}>Generate RGB Color</button>

   <button onClick={typeOf === 'hex' ? randomHexColor : randomRgbColor}>Generate Random Color</button>

   <div style={{
    display : 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    color : '#fff',
    fontSize: '60px',
    marginTop : '50px'
   }}>
     <h3>{typeOf === 'hex' ? "Hex Color" : "RGB Color"}</h3>
     <h1>{color}</h1>
   </div>
  </div>
 )
}