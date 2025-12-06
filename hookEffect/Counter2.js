import React, { useState, useEffect } from 'react';

export default function Counter2() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
 const increment = () => setClickCount( prev => prev + 1);

 useEffect(()=> {
  document.addEventListener('mousedown', increment);
  return () => {
    document.removeEventListener('mousedown', increment);
  }
 });
 
  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

//This code uses the Effect Hook to add a `'mousedown'` event listener to the whole document. Each time you click anywhere, the `increment` function runs and updates the click count. The effect also returns a cleanup function to remove the event listener before the component re-renders or unmounts, preventing memory leaks.