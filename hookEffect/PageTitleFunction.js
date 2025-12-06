import React, { useState, useEffect } from 'react';
 
export default function PageTitle() {
  const [name, setName] = useState('');
 
 useEffect(() => {
    document.title = `Hi, ${name}`;
  }, [name]);
 
  return (
    <div>
      <p>Use {name} input field below to rename this page!</p>
      <input 
        onChange={({target}) => setName(target.value)} 
        value={name} 
        type='text' />
    </div>
  );
}

// `{target}` is used to quickly get the `target` property from the event object. This makes it easy to access `target.value`, which holds the input’s value. It is a shortcut for writing `event.target.value`.
