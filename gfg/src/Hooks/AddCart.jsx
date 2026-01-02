import React, { useState } from "react";

const Brands = [
  { id: "1", brandName: "Puma" },
  { id: "2", brandName: "Adidas" },
  { id: "3", brandName: "Nike" },
  { id: "4", brandName: "Reebook" },
];

export default function AddCart() {
  const [selectedBrand, setSelectedBrand] = useState([]);

  const OnAddtoCartClick = (id) => {
    const selectedItem = Brands.find((brand) => brand.id === id);
    const existingItem = selectedBrand.find((item) => item.id === id);

    if (existingItem) {
      const updatedCart = selectedBrand.map((item) =>
        item.id === id
          ? { ...item, count: item.count + 1 }
          : item
      );
      setSelectedBrand(updatedCart);
    } else {
      setSelectedBrand([...selectedBrand, { ...selectedItem, count: 1 }]);
    }
    // Removed alert for better UX
  };

  const OnRemoveFromCart = (id) => {
    const existingItem = selectedBrand.find((item) => item.id === id);

    if (existingItem.count > 1) {
      const updatedCart = selectedBrand.map((item) =>
        item.id === id
          ? { ...item, count: item.count - 1 }
          : item
      );
      setSelectedBrand(updatedCart);
    } else {
      const updatedCart = selectedBrand.filter((item) => item.id !== id);
      setSelectedBrand(updatedCart);
    }
  };

  return (
    <div className="component-container">
      <h2 className="component-title">Shopping Cart Project</h2>

      <div style={{ marginBottom: '30px' }}>
        <h3>Available Products</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {Brands.map((brand) => (
            <div key={brand.id} className="list-item">
              <span>{brand.brandName}</span>
              <button onClick={() => OnAddtoCartClick(brand.id)} className="styled-button" style={{ marginBottom: 0, padding: '5px 10px', fontSize: '0.9em' }}>
                Add +
              </button>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: '1px solid #444', paddingTop: '20px' }}>
        <h3>Your Cart</h3>
        {selectedBrand.length === 0 && <p style={{ color: '#888', fontStyle: 'italic' }}>Cart is empty</p>}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {selectedBrand.map((brand) => (
            <div key={brand.id} className="list-item" style={{ background: '#444' }}>
              <span>
                {brand.brandName} <strong style={{ color: '#646cff' }}>(x{brand.count})</strong>
              </span>
              <button onClick={() => OnRemoveFromCart(brand.id)} className="styled-button" style={{ marginBottom: 0, padding: '5px 10px', fontSize: '0.9em', background: '#ff4d4d' }}>
                Remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
