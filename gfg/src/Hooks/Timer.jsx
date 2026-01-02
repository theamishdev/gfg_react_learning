import React, { useState, useRef } from 'react'

export default function Timer() {
  const [seconds, setSeconds] = useState(0)
  const timerRef = useRef(null)

  const startTimer = () => {
    if (!timerRef.current) {
      timerRef.current = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000) // 1 second interval
    }
  }

  const stopTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = null
  }

  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60

  return (
    <div className="component-container">
      <h2 className="component-title">Timer Project</h2>
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <p style={{ fontSize: '3rem', fontFamily: 'monospace', margin: '10px 0' }}>
          {String(mins).padStart(2, '0')} : {String(secs).padStart(2, '0')}
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
          <button onClick={startTimer} className="styled-button" style={{ minWidth: '100px' }}>Start</button>
          <button onClick={stopTimer} className="styled-button" style={{ minWidth: '100px' }}>Stop</button>
        </div>
      </div>
    </div>
  )
}
