//Conditional rendering
import React from 'react'
import '../App.css'
function Loader(){
    return(
        <h1>Loading.......</h1>
    )
}
const products=[{id: "1",item: "Laptop"},{id: "2",item:"Tab"},{id: "3",item: "Personal Computer"},{id:"4",item:"Android"}]
export default function Admin() {
    const isAdmin=false;                    //for any js thing use = {}
    const isLoading= false;
    return (
    <>
    {
        isAdmin?<h1>This is Admin Portal</h1>:<h1>This is User Portal</h1>
    }
    {
        isLoading?<h3>Loading Successful</h3>:<Loader/>
    }
       {/* products.map(products=><p key={products.id}>{products.item}</p>)*/}    {/*one way without item no.*/}
<ul>
  {
    products.map(p => {
      return (
        <li key={p.id} className={`${p.id % 2 === 0 ? 'bg-color-red' : 'bg-color-org '} margin-8px`}>{p.item}</li>
      )
    })
  }
</ul>

    
    </>
  )
}
