import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);
// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      {!judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
       {/*If the left side is true, the right side (the JSX) is rendered,	If the left side is false, nothing is rendered */}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root.render(favoriteFoods);
