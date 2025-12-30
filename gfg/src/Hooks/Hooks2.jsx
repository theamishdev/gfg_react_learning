import React, { useState } from 'react'
{/*Use of useState to show local useState use(like loca  variable)*/ }
const AddButton = () => {
const [count, setCount] = useState(0);
const increment=()=>{
    setCount(count+1);
}

  return (
    <button onClick={increment}>Increment{count}</button>
  )
}

const MinusButton = () => {
const [count, setCount] = useState(0); 
const decrement=()=>{
    setCount(count-1)
}   
  return (
    <button onClick={decrement}>Decrement{count}</button>
  )
}

export default function Hooks2() {
  return (
    <>
    <AddButton/>
    <MinusButton/>
    </>
  )
}
