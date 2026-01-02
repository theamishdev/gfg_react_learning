//Functional Component 
import React from 'react'
let count = 0;
//check on console using inspect
export default function Button() {
  const onIncrement = () => {
    count += 1;
    console.log({ count });

  }
  const onDecrement = () => {
    count -= 1;
    console.log({ count });

  }
  const onChange = (event) => {
    console.log(event.target.value);

  }
  return (
    <div className="component-container">
      <h2 className="component-title">Button Event Demo</h2>
      <button id='btn-id' onClick={onIncrement} className="styled-button">Increment</button>
      <button id='btn-id-dec' onClick={onDecrement} className="styled-button">Decrement</button>
      <br />
      <input onChange={onChange} placeholder='searching .....' className="styled-input"></input>
      <p style={{ fontSize: '0.8rem', color: '#888' }}>Check console for output</p>
    </div>
  )
}
