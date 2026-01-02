import React, { useState } from 'react'
{/*Use of useState to show local useState use(like loca  variable)*/ }
const AddButton = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={increment} className="styled-button">Increment Local: {count}</button>
    </div>
  )
}

const MinusButton = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount(count - 1)
  }
  return (
    <div style={{ marginBottom: '10px' }}>
      <button onClick={decrement} className="styled-button">Decrement Local: {count}</button>
    </div>
  )
}

export default function Hooks2() {
  return (
    <div className="component-container">
      <h2 className="component-title">useState Multiple Instances (Hooks2)</h2>
      <p style={{ marginBottom: '15px' }}>Each button manages its own independent state.</p>
      <AddButton />
      <MinusButton />
    </div>
  )
}
