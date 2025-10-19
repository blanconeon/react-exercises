import React from 'react';

function Button() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button onClick={handleClick}>Submit</button>;
}

export default Button;
