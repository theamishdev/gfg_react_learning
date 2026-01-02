/* Create a list of object and then create a search bar and then when searched for any product it should show it*/
import React, { useState } from 'react'

const allBrands = [
  { id: "1", brandName: "Puma" },
  { id: "2", brandName: "Adidas" },
  { id: "3", brandName: "Nike" },
  { id: "4", brandName: "Reebook" }
];

export default function BrandFilter() {
  const [search, setsearch] = useState("")
  const [brands, setbrands] = useState(allBrands)

  const onsearch = (e) => {
    const val = e.target.value
    setsearch(val)
    const filteredBrands = allBrands.filter(brand =>
      brand.brandName.toLowerCase().includes(val.toLowerCase())
    )
    setbrands(filteredBrands)
  }

  return (
    <div className="component-container">
      <h2 className="component-title">Brand Filter Project</h2>
      <input
        value={search}
        onChange={onsearch}
        placeholder='Search brands...'
        className="styled-input"
      />

      <ul className="list-container">
        {
          brands.length > 0 ? brands.map(brand => (
            <li key={brand.id} className="list-item">{brand.brandName}</li>
          )) : <li className="list-item" style={{ justifyContent: 'center', color: '#888' }}>No brands found</li>
        }
      </ul>
    </div>
  )
}
