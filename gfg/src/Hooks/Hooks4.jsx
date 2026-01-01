import React from 'react'
import {useRef} from 'react'
export default function Hooks4() {    /* Functional compoonent can't be given useRef(It can be only done using react.forwardRef) */
    const input=useRef()
    const onFocus=()=>{
        input.current.focus()
    }
  return (
    <div>
      <input ref={input} placeholder='search'/>
      <button onClick={onFocus}>Focus on Input</button>
    </div>
  )
}
