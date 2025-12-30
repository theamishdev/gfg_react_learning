import React from 'react'
import { useState } from 'react'
/* Simple counter */                /* Shortcut key for comment---->  Alt+Shift+A */

var count = 0;
function logname() {
  return "Amish Naam toh suna hi hoga 😎 "
}

export default function Hooks1() {
  const [value, setvalue] = useState(100)
  const [log, setlog ] = useState(logname)
  const onDecrement = ()=>{
    count=count-1;
    console.log({count});
    setvalue(value-1)
    
  }     
  const onIncrement = () => {
    count = count + 1;
    console.log({ count })
    setvalue(value + 1)
  }

  // function logname removed from here
  return (
    <>
      <button onClick={onIncrement}>Increment</button>;<br></br>{count}<br></br>
      <button onClick={onDecrement}>Decrement</button>
      <div>value (using hooks ) is {value}</div>
      <button onClick={() => setlog("Ab toh sun lia😂")}>{log}</button>
    </>
  )
}
