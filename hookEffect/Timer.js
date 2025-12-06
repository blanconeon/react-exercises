import React, { useState, useEffect } from 'react';
//Any state change (even if unrelated to the timer) causes a re-render, which restarts the interval if there’s no dependency array in useEffect.
export default function Timer() {
  const [time, setTime] = useState(0); // at syntax below carefully const intervalID = setInterval(() => { setTime(prev => prev + 1); }, 1000);
  const [name, setName] = useState("");
  const handleChange = ({target}) => setName(target.value);

 useEffect(() => {
 const intervalID = setInterval(() => { setTime(prev => prev + 1); }, 1000);// number on browsers continues despite new interval because it displayed the updated time state variable
return () => {
  clearInterval(intervalID); 
};


}, []);
  return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} />
    </>
  );
}
// useEffect DOES NOT NEED A RETURN STETEMENT, a returnn would be the clean up

/*Yes, you are learning three main key concepts with `useEffect`:

1. **Running side effects after render:** `useEffect` lets you run code (like timers or data fetching) after the component renders.
2. **Cleanup functions:** Returning a function from `useEffect` lets you clean up things like intervals or event listeners to prevent bugs.Cleanup runs only before the effect on re-renders or when the component unmounts. It does not run on the first render.
3. **Dependency array:** The second argument to `useEffect` controls when the effect runs—on every render, only once, or when certain values change.

It’s similar, but not exactly the same.

- With `useState`, when you update the state, React replaces the old value with the new one. The old value is gone, and only the new value is kept.
- With `useEffect`, the cleanup function is used to undo or remove side effects (like event listeners or intervals) from the previous effect before setting up new ones.

So, both make sure you don’t have leftovers, but `useState` manages values, while `useEffect` cleanup manages side effects.*/



