import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { AddThoughtForm } from './AddThoughtForm';
import { Thought } from './Thought';
import { generateId, getNewExpirationTime } from './utilities';

export default function App() {
  const [thoughts, setThoughts] = useState([
    {
      id: generateId(),
      text: 'This is a place for your passing thoughts.',
      expiresAt: getNewExpirationTime(),
    },
    {
      id: generateId(),
      text: "They'll be removed after 15 seconds.",
      expiresAt: getNewExpirationTime(),
    },
  ]);

  function addThought(thought) {
    setThoughts(thoughts => [thought, ...thoughts]);
    // or setThoughts(prev => [thought, ...prev]);
    };

    function removeThought (thoughtIdToRemove) {
     setThoughts(thoughts =>
     thoughts.filter(thought => thought.id !== thoughtIdToRemove)
     )
    }; //setThoughts should take a function as its argument to ensure you always work with the latest state
    
    /*If the IDs do not match
     thought.id !== thoughtIdToRemove
    TRUE → item is kept
     If the IDs match
     thought.id !== thoughtIdToRemove
    FALSE → item is removed*/
    
  return (
    <div className="App">
      <header>
        <h1>Passing Thoughts</h1>
      </header>
      <main>
        <AddThoughtForm addThought={addThought} />
        <ul className="thoughts">
          {thoughts.map((thought) => (
            <Thought key={thought.id} thought={thought}  removeThought={removeThought} />
          ))}
        </ul>
      </main>
    </div>
  );
}

/* 
1. User types in the input box.  
2. `handleTextChange` runs, updating the `text` state with the new value.  
3. User clicks the "Add" button (or presses Enter).  
4. The form’s `onSubmit` event triggers `handleSubmit`.  
5. `handleSubmit` prevents the page from reloading, creates a new thought object, and calls `props.addThought(object)`.  
6. `addThought` (from `App`) updates the `thoughts` state to include the new thought.  
7. `setText('')` clears the input box.  
8. The UI re-renders, showing the new thought.








Great question! Here’s how it works:

- `App` imports and renders `<AddThoughtForm addThought={addThought} />`.  
- This means `App` is giving the `addThought` function to `AddThoughtForm` as a prop.
- In `AddThoughtForm`, the function is received as part of the `props` object (the parameter in the function).
- So, when you call `props.addThought(...)` in `AddThoughtForm`, you are calling the function that was passed down from `App`.

`AddThoughtForm` does not need to import `addThought` directly. It just uses whatever is passed to it as a prop. This is how React components communicate: parents pass data and functions to children through props.*/
