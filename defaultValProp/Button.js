import React from 'react';

function Button(props) {
  const {text = "aloha"} = props;
    return (
      <button>{text}</button>
    );
}

export default Button;