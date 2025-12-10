import React, {useEffect} from 'react';

export function Thought(props) {
  const { thought, removeThought } = props;

  const handleRemoveClick = () => {
    removeThought(thought.id);
  };

   useEffect(() => {
    const timer = setTimeout(() =>  removeThought(thought.id), thought.expiresAt - Date.now())
  return () => clearTimeout(timer);
   }, [thought]);

  return (
    <li className="Thought">
      <button
        aria-label="Remove thought"
        className="remove-button"
        onClick={handleRemoveClick}
       
      >
        &times;
      </button>
      <div className="text">{thought.text}</div>
    </li>
  );
}

// like in removeThought: Once the prop is passed in the parent’s JSX, the child can use it anywhere in its function, not just in its own JSX. It can be used in event handlers or other functions inside the child component. BUT NOTE!: Passing the prop in JSX makes it available in the child. Destructuring in the child lets you use it easily inside the component. BOTH STEPS ATRE NEEDED.Yes, both are needed. Passing the prop in the JSX (removeThought={removeThought}) makes it available to the child. Destructuring (const { thought, removeThought } = props;) in the child lets you use it easily inside the component. Both steps are required.

// NOTE: Subtracting `Date.now()` from `thought.expiresAt` gives the exact time left before a thought should disappear. This keeps the countdown accurate, no matter when the component renders. 

// note: Each timer is independent because each `Thought` component manages its own timer. However, using `thought.expiresAt - Date.now()` is still important for accuracy.

/*

- When a `Thought` component mounts, it may not be exactly at the moment the thought was created. There could be a delay (for example, if the app re-renders or if the user adds several thoughts quickly).
- By calculating `thought.expiresAt - Date.now()`, the timer always waits for the correct remaining time, no matter when the component mounts or re-renders.
- If you used a fixed value (like `15000`), the timer could be off if the component didn’t mount right away.

So, each timer is independent, but this calculation ensures each timer is also accurate, even if the component is created or re-rendered at a different time.


Good explanation! The cleanup function in `useEffect` clears the timeout if the component unmounts or if the effect runs again (for example, if the `thought` changes). This prevents multiple timers from running at the same time and avoids memory leaks or unexpected behavior. The effect only re-runs when the `thought` changes, as set in the dependency array.


Each initial thought has its own timer.
When each timer finishes, it calls removeThought(thought.id) for its own ID.
So, the filter runs twice—once for each thought—removing them one at a time, each after 15 seconds. this is in the context of the frst two thoughts*/
