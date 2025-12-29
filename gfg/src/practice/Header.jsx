import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();

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
      {/* Left side content */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        <h1 style={{ margin: 0 }}>Shopify App</h1>
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

      {/* Right side content */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <h3 style={{ margin: 0, color: 'white' }}>Hooks</h3>
        <button onClick={() => navigate('/hooks1')}>Go to Hooks1</button>
      </div>
    </div>
  )
}
