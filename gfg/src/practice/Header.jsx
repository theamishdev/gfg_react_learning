import React from 'react'
export default function Header() {
  return (
    <div style={{
      backgroundColor: 'gray',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      padding: '10px 20px',
      boxSizing: 'border-box'
    }}>
      <h1>Shopify App</h1>
      <ul style={{
        display: 'flex',
        gap: '20px',
        listStyle: 'none',
        padding: '0',
        margin: '0',
        color: 'white'
      }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <input placeholder='Search for products' />
    </div>

  )
}
