import React from 'react';
import Button from './Button';



function Talker() {
function talk() {
  let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  return alert(speech);
}
  
  return <Button talk={talk}  /> //talk here is above Button and below App
}

export default Talker;