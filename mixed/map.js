import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person,i) =>
  // expression goes here:
  {
   return <li key={'person_' + i}>{person}</li>;
  } // in JavaScript, when you use the + operator with a string and a number, the number is automatically converted to a string. So 'person_' + i will result in something like 'person_0', 'person_1', etc.
);

// root.render goes here:
root.render(<ul>{peopleList}</ul>);