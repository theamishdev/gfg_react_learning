import React, { useState } from "react";

const Brands = [
  { id: "1", brandName: "Puma" },
  { id: "2", brandName: "Adidas" },
  { id: "3", brandName: "Nike" },
  { id: "4", brandName: "reebook" },
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

    alert(`Added ${selectedItem.brandName} to your cart.`);
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
    <>
      <div>
        <p>Add Brand to your cart</p>
        {Brands.map((brand) => (
          <div key={brand.id}>
            <span>{brand.brandName}</span>
            <button onClick={() => OnAddtoCartClick(brand.id)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <hr />

      <div>
        <p>Items in Cart:</p>
        {selectedBrand.length === 0 && <p>No items added yet</p>}

        {selectedBrand.map((brand) => (
          <div key={brand.id}>
            <span>
              {brand.brandName} (x{brand.count})
            </span>
            <button onClick={() => OnRemoveFromCart(brand.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
