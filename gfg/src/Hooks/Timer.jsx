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
    <>
      <p>
        Time: {String(mins).padStart(2, '0')} : {String(secs).padStart(2, '0')}
      </p>

      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
    </>
  )
}
