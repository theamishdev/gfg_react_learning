import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="component-container header-container">
      <div className="header-nav">
        {/* Left side content */}
        <div className="header-left">
          <h1 className="header-title">Shopify App</h1>
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Contact</li>
          </ul>
          <input placeholder='Search products...' className="styled-input header-search" />
        </div>

        {/* Right side content */}
        <div className="header-right">
          <h3 className="header-subtitle">Hooks</h3>
          <button onClick={() => navigate('/hooks1')} className="styled-button header-button">Go to Hooks1</button>
        </div>
      </div>
      <div className="header-footer">
        <p>This is a demonstration of a Header component.</p>
      </div>
    </div>
  )
}
