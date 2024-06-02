import React from "react";

export default function useLocalStorage(key, defaultValue){
 const [value, setValue] = React.useState(() => {
  let currentValue;

  try {
   currentValue = JSON.parse(localStorage.getItem(key) || String(defaultValue));
  } catch (error) {
   console.log(error);
   currentValue = defaultValue;
  }

  return currentValue;
 })

 React.useEffect(() => {
 localStorage.setItem(key, JSON.stringify(value));
}, [key, value]);

 return [value, setValue];
}

