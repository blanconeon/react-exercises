import React from 'react';

function GroceryItem (props) {
  function handleClick(){
    return alert(`you have selected ${props.name}`)
  }
  return (
  <div>
  <button onClick={handleClick}>{props.name}</button>

  </div>
  )
}

export default GroceryItem;