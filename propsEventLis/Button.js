import React from 'react';

function Button(props) {
    return (
      <button onClick={props.talk}>
        Click me!
      </button>
    );
}

export default Button;

//button is the lowest level being the props.talk  event listener goes in button to call on talk