import React, { useState } from 'react'
import { useEffect } from 'react'
export default function Hooks5() {
    const[count,setcount]=useState(0)
    useEffect(()=>{
        /* https://dummyjson.com/products */
        /* const url= `https://dummyjson.com/products/${count}`         It will get element with id of count*/
        const url= 'https://dummyjson.com/products'
        fetch(url)
            .then(res =>res.json())
            .then(data => console.log(data));
        /*console.log("Hello")*/
    },[count])/* You can pass no of times useffect will callback the function in dependency array */
   /* no need to pass value in dependency  array if want to callback once-->good practice */

    return (
    <div>
      <button onClick={()=>setcount(count+1)}>click- {count}</button>
    </div>
  )
}
