import { useState } from "react";

function StudentForm() {
  const [userInput, setUserInput] = useState({
  firstName: '',
  lastName: '',
  age: '',
  address: '',
  homeroom: '',
  studentID: '',
  favoriteLunch: ''
});
  function handleUserInput(e) {
   setUserInput((prev) => ({ ...prev, [e.target.name]: e.target.value}));
   console.log(e.target.name, e.target.value);
  }
  return (
    <>
     <div>
     <h3> Student Form </h3>
     <p> Please complete the following from at your earliest convenience, if you have questions about this form contact administration on 0430732143. </p> 
    <form>
    <div>
    <label htmlFor='firstName' > First Name </label>
    <input name='firstName' id='firstName' type='text' onChange={handleUserInput} value={userInput.firstName} />
    </div>
    
    <div>
     <label htmlFor='lastName' > Last Name </label>
    <input name='lastName' id='lastName' type='text' onChange={handleUserInput} value={userInput.lastName} />
    </div>

    <div>
    <label htmlFor='age' > Age </label>
    <input name='age' id='age' type='text' onChange={handleUserInput} value={userInput.age} />
    </div>

    <div>
    <label htmlFor='address' > Address </label>
    <input name='address' id='address' type='text' onChange={handleUserInput} value={userInput.address} />
    </div>

    <div>
    <label htmlFor='homeroom' > Homeroom class number </label>
    <input name='homeroom' id='homeroom' type='text' onChange={handleUserInput} value={userInput.homeroom} />
    </div>

    <div>
    <label htmlFor='studentID' > Student ID </label>
    <input name='studentID' id='studentID' type='text' onChange={handleUserInput} value={userInput.studentID} />
    </div>
    
    <div>
    <p>Favorite Lunch</p>
    <input type="radio" id="pizza" name="favoriteLunch" value="pizza" checked={userInput.favoriteLunch === 'pizza'} onChange={handleUserInput}/>
    <label htmlFor="pizza">Pizza</label>
    <input type="radio" id="salad" name="favoriteLunch" value="salad" checked={userInput.favoriteLunch === 'salad'} onChange={handleUserInput} />
    <label htmlFor="salad">Salad</label>
    <input type="radio" id="soup" name="favoriteLunch" value="soup" checked={userInput.favoriteLunch === 'soup'} onChange={handleUserInput} />
    <label htmlFor='soup'>Soup</label>
   </div>

   <hr />
  <h3>Your Data:</h3>
   <div>
   <h4>First Name: {userInput.firstName}</h4>
   <h4>Last Name: {userInput.lastName}</h4>
   <h4>Age: {userInput.age}</h4>
   <h4>Address: {userInput.address}</h4>
   <h4>Homeroom class number: {userInput.homeroom}</h4>
   <h4>Student ID: {userInput.studentID}</h4>
   <h4>Favorite lunch: {userInput.favoriteLunch}</h4>
   </div>

   </form>

    </div>
    </>
   );
  }

export default StudentForm;

/* 1. The state object holds all form field values, each as a key.
2. When a user types in a field, the handler runs.
3. The handler uses `prev` to get the current state object.
4. The spread operator copies all existing fields from `prev`.
5. The handler updates only the field that matches the input’s `name` with the new value.
6. `prev` ensures no other fields are lost or overwritten, keeping the rest of the state unchanged.


- The source of truth is still `userInput.favoriteLunch`. Here’s why:

- The radio button’s `checked` attribute depends on `userInput.favoriteLunch`.
- When a user selects a radio button, `onChange` updates `userInput.favoriteLunch` in state.
- The UI updates based on the new state value.
- The input’s checked status always reflects the state, not the DOM.

So, the state (`userInput.favoriteLunch`) controls what is shown, making it the source of truth. The input does not manage its own checked status; it only reflects what’s in state.*/ 