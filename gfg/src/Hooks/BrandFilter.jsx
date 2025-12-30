/* Create a list of object and then create a search bar and then when searched for any product it should show it*/
import React from 'react'
import { useState } from 'react';

const allBrands=[
    {id: "1", brandName: "Puma"},
    {id: "2", brandName: "Adidas"},
    {id: "3", brandName: "Nike"},
    {id: "4", brandName: "reebook"}
];

export default function BrandFilter() {
const [search,setsearch]=useState("")
const [brands,setbrands]=useState(allBrands)

const onsearch=(e)=>{
    const val=e.target.value
    setsearch(val)
    const filteredBrands = allBrands.filter(brand =>
        brand.brandName.toLowerCase().includes(val.toLowerCase())
    )
    setbrands(filteredBrands)
}

  return (
    <div>
      <input value={search} onChange={onsearch} placeholder='Enter the brand to search'/>
      <ul>
      {
        brands.map(brand => <li key={brand.id}>{brand.brandName}</li>)
      }
      </ul>
    </div>
  )
}
