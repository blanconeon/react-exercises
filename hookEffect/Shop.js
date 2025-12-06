import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});

     useEffect(() => {
      get('/categories').then((response) => {
         alert(JSON.stringify(response.data));
        setCategories(response.data);
       
      });
    },[]);
  

 
     useEffect(() => {
      if (selectedCategory && !items[selectedCategory]) {
      get(`/items?category=${selectedCategory}`).then((response) => {
       setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
      }
     }, [items, selectedCategory]);
   

  if (!categories) {
    return <p>Loading..</p>;
  }

  return (
    <div className='App'>
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory] // check if items and selectedCategory are truthy
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)} {/* and here we actually call the property of the name inside items */}
      </ul> 
    </div>
  );
}
/*State hooks like `useState` should only be called inside the function body of a React function component, not in the global scope of the file. Each component manages its own state. If you have multiple components in one file, each one should call its own hooks at the top of its function body, not outside or above the function. Never call hooks outside of a React function.



1. The component loads and fetches a list of categories from the backend.  
2. The categories are saved in state and shown as buttons.  
3. When you click a category button, the selected category is saved in state.  
4. If items for that category are not already saved, the component fetches them from the backend.  
5. The fetched items are saved in an object, with the category name as the key.  
6. The UI shows the items for the selected category.*/