import React, { useState } from "react";
import ItemList from "./ItemList.";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  // declare and initialize state 
 const [cart, setCart] = useState([]);
  const addItem = (item) => setCart(itemAdded => [item, ...itemAdded])
 

  const removeItem = (targetIndex) => setCart(itemToRemove => itemToRemove.filter((remove, index) => index !== targetIndex));
 /*Great observation!  
The first parameter in `.filter()` (here called `remove`) represents the value, and the second parameter (`index`) represents the index.

In your code, you only need the index to compare with `targetIndex`.  
You still have to include the first parameter (`remove`) because JavaScript requires it to access the second parameter (`index`).  
If you skip the first parameter, you can’t get the index.

So, `remove` is not used, but it must be there so you can use `index`.  
This is a common pattern in JavaScript array methods. */

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}
