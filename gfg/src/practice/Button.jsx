//Functional Component 
import React from 'react'
let count=0;
//check on console using inspect
export default function Button() {
    const onIncrement=()=>{
        count+=1;
        console.log({count});
        
    }
    const onDecrement=()=>{
        count-=1;
        console.log({count});
        
    }
    const onChange=(event)=>{
        console.log(event.target.value);
        
    }
  return (
    <>
      <button id='btn-id' onClick={onIncrement} style={{ display: "block", marginBottom: "10px" }}>Increment</button>
      <br/>
      <button id='btn-id-dec' onClick={onDecrement} style={{ display: "block", marginBottom: "10px" }}>Decrement</button>
      <br/>              
       <input onChange={onChange} placeholder='searching .....' style={{ display: "block", marginBottom: "10px" }}></input>
    </>
  )
}
