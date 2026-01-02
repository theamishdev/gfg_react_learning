import React, { useState } from 'react';

export default function Pincode() {
    const [pincode, setPincode] = useState('');
    const [message, setMessage] = useState('');

    const addresses = [
        { city: 'Mumbai', pinCode: '400001', isDefault: true },
        { city: 'Navi Mumbai', pinCode: '400701', isDefault: false },
        { city: 'Noida', pinCode: '201301', isDefault: false },
        { city: 'Delhi', pinCode: '110001', isDefault: false }
    ];

    const handleCheck = () => {
        const found = addresses.find(addr => addr.pinCode === pincode);
        if (found) {
            setMessage(`Deliverable at ${pincode}: ${found.city}`);
        } else {
            setMessage('Not deliverable');
        }
    };

    return (
        <div className="component-container">
            <h2 className="component-title">Pincode Checker</h2>
            <div className="pincode-controls">
                <input
                    type="text"
                    placeholder="Enter pincode (e.g. 400001)"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="styled-input pincode-input"
                />
                <button onClick={handleCheck} className="styled-button pincode-button">
                    Check
                </button>
            </div>

            {message && (
                <div className={`pincode-message ${message.includes('Not') ? 'pincode-error' : 'pincode-success'}`}>
                    <strong>{message}</strong>
                </div>
            )}
        </div>
    );
}
