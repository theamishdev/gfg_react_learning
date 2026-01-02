import React from 'react'
import { useRef } from 'react'
export default function Hooks4() {    /* Functional compoonent can't be given useRef(It can be only done using react.forwardRef) */
  const input = useRef()
  const onFocus = () => {
    input.current.focus()
  }
  return (
    <div className="component-container">
      <h2 className="component-title">useRef Focus Demo (Hooks4)</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <input ref={input} placeholder='Search...' className="styled-input" style={{ marginBottom: 0 }} />
        <button onClick={onFocus} className="styled-button" style={{ marginBottom: 0 }}>Focus Input</button>
      </div>
    </div>
  )
}
