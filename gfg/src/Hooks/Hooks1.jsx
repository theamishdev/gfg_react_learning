import React from 'react'
import { useState } from 'react'
/* Simple counter */                /* Shortcut key for comment---->  Alt+Shift+A */

var count = 0;
function logname() {
  return "Amish Naam toh suna hi hoga 😎 "
}

export default function Hooks1() {
  const [value, setvalue] = useState(100)
  const [log, setlog] = useState(logname)
  const onDecrement = () => {
    count = count - 1;
    console.log({ count });
    setvalue(value - 1)

  }
  const onIncrement = () => {
    count = count + 1;
    console.log({ count })
    setvalue(value + 1)
  }

  // function logname removed from here
  return (
    <div className="component-container">
      <h2 className="component-title">useState Basic (Hooks1)</h2>
      <div style={{ marginBottom: '10px' }}>
        <p>Global Count: {count} (Updates on console/re-render)</p>
        <button onClick={onIncrement} className="styled-button">Increment</button>
        <button onClick={onDecrement} className="styled-button">Decrement</button>
      </div>

      <div style={{ marginBottom: '10px', padding: '10px', background: '#333', borderRadius: '5px' }}>
        <p>State Value: <strong>{value}</strong></p>
      </div>

      <div>
        <button onClick={() => setlog("Ab toh sun lia😂")} className="styled-button">Change Log Text</button>
        <p>{log}</p>
      </div>
    </div>
  )
}
