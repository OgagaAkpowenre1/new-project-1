import React from "react";
import './styles.css';
import QRCode from "react-qr-code";

export default function QRCodeGenerator(){
 const [qrCode, setQrCode] = React.useState('');
 const [input, setInput] = React.useState('');

 function handleGenerateCode(){
  setQrCode(input);
  setInput('');
 }

 return  (
  <div>
   <h1>QR Code Generator</h1>
   <div>
    <input 
    onChange={(e) => setInput(e.target.value)}
    type="text" 
    placeholder="Enter your value" 
    name="qr-code"></input>
    <button 
    disabled={input && input.trim() !== '' ? false : true}
    onClick={handleGenerateCode}>Generate</button>
   </div>
   <div>
    <QRCode 
    value={input}
    id="qr-code-value"
    bgColor="#fff"
    size={400}
    />
   </div>
  </div>
 )
}