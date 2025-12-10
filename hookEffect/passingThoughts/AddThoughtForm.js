import React, { useState } from 'react';
import { generateId, getNewExpirationTime } from './utilities';

export function AddThoughtForm(props) {
  const [text, setText] = useState("");
 
  function handleTextChange(event){
  return setText(event.target.value);
  };

  function handleSubmit(event) {
  event.preventDefault(); 
  const object = {
    id: generateId(),
    text: text,
    expiresAt: getNewExpirationTime()
  }
  if (text.trim().length > 0) {
   props.addThought(object);
   setText("");
}
  };
  
  return (
    <form className="AddThoughtForm"onSubmit={handleSubmit} >
      <input
        type="text"
        aria-label="What's on your mind?"
        placeholder="What's on your mind?"
        value={text}
        onChange={handleTextChange}
      />
      <input type="submit" value="Add" />
    </form>
  );
}
 /*
 - <input type="submit" value="Add" />: The value="Add" sets the text that appears on the submit button.

 -Setting value={text} makes sure the input always shows the current state of text. When the user types, handleTextChange updates the state, and the input updates to match. This keeps everything in sync.*/

 
/*`event` is the whole event object, which contains information about what happened.  
`event.target` is the specific element (like the input box) that triggered the event.  
`event.target.value` is the value inside that element.  

They go together because you use `event` to access `target`, and then `value`. For input changes, this is the standard way to get what the user typed.



-When the user types, handleTextChange runs and calls setText(event.target.value). This updates the state with the input’s value.
When the user submits the form, handleSubmit runs and calls event.preventDefault(). This stops the page from refreshing. You can then add logic to handle the submitted data.



-When the submit button is pressed, the form’s default behavior (submitting and reloading the page) is stopped by event.preventDefault(). The form does not reload the page, but your custom code inside handleSubmit can still process the form data and update the app as needed. So, the form is not submitted in the traditional way, but you can handle the submission with JavaScript.


You
why we dont want the page to reload

AI Assistant
Reloading the page would erase all the current state and data in your React app. This would remove any thoughts the user added and reset the app to its initial state. By stopping the reload, you keep everything in place and can update the UI smoothly using React, giving a better user experience.


-When a user submits a thought, `event.preventDefault()` stops the page from reloading. The app updates its state to include the new thought, causing a re-render. The new thought appears on the page, all previous thoughts remain visible, and the page never reloads.


- In React, data and functions flow from parent to child through props. Here’s what’s happening:

- The `App` component is the parent. It defines the `addThought` function.
- `App` passes `addThought` as a prop to the `AddThoughtForm` child component.
- Inside `AddThoughtForm`, you use `props.addThought` to call the function from the parent.

So, the parent (`App`) gives the function to the child (`AddThoughtForm`). The child calls it when needed. This is the standard React pattern.

*/
