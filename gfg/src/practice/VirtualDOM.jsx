import React from 'react'
import {useState} from 'react'
export default function VirtualDOM() {
    const [name, setText] = useState('');
    const [count, setCount] =useState(0);
  return (
    <div>
      <>
        <input onChange={(e)=> setText(e.target.value)}placeholder='Search for products' />
        <p>Hello - {name}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>  
        <p>Count: {count}</p>                                   {/*check on console using inspect for p tag re-rendering*/}
      </>
    </div>
  )
}
