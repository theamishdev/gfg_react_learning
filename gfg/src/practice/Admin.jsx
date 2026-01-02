//Conditional rendering
import React from 'react'
import '../App.css'

function Loader() {
  return (
    <h3 className="loader-text">Loading data...</h3>
  )
}

const products = [{ id: "1", item: "Laptop" }, { id: "2", item: "Tab" }, { id: "3", item: "Personal Computer" }, { id: "4", item: "Android" }]

export default function Admin() {
  const isAdmin = false;                    //for any js thing use = {}
  const isLoading = false;
  return (
    <div className="component-container">
      <h2 className="component-title">Conditional Rendering Demo</h2>

      <div className="status-box">
        {
          isAdmin ? <h3 className="status-granted">Access Granted: Admin Portal</h3> : <h3 className="status-denied">Access Denied: User Portal</h3>
        }
      </div>

      <div className="loading-container">
        {
          isLoading ? <Loader /> : <h3>Status: Loaded Successfully</h3>
        }
      </div>

      <h3>Product List</h3>
      <ul className="list-container">
        {
          products.map(p => {
            return (
              <li key={p.id} className="list-item">
                <span>{p.item}</span>
                <span className="product-id">ID: {p.id}</span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}
