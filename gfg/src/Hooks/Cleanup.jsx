import React from 'react'
import { useState, useEffect } from 'react'

export default function Cleanup() {
  const [count, setcount] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setcount(count => count + 1)
    }, 1000)
    return () => {
      console.log("Clean-up Function");

      clearInterval(interval)
    }
  }, [])
  return (
    <div className="component-container">
      <h2 className="component-title">Cleanup Function Demo</h2>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h3 style={{ color: '#888', margin: 0 }}>Auto Counter</h3>
        <h2 style={{ fontSize: '4rem', margin: '10px 0', color: '#646cff' }}>{count}</h2>
        <p style={{ fontSize: '0.8em', color: '#666' }}>This counter cleans up on unmount (check console)</p>
      </div>
    </div>
  )
}
