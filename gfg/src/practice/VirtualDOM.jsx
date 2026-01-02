import React from 'react'
import { useState } from 'react'

export default function VirtualDOM() {
  const [name, setText] = useState('');
  const [count, setCount] = useState(0);
  return (
    <div className="component-container">
      <h2 className="component-title">Virtual DOM Demo</h2>

      <div style={{ marginBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Type something to update state:</label>
        <input
          onChange={(e) => setText(e.target.value)}
          placeholder='Type here...'
          className="styled-input"
        />
        <p>Text State: <strong>{name}</strong></p>
      </div>

      <div style={{ borderTop: '1px solid #444', paddingTop: '20px' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Counter State:</label>
        <button onClick={() => setCount(count + 1)} className="styled-button">Increment Count</button>
        <p>Count State: <strong>{count}</strong></p>
        <p style={{ fontSize: '0.8rem', color: '#888', fontStyle: 'italic' }}>Note: Open console/inspect to observe re-rendering behavior.</p>
      </div>
    </div>
  )
}
