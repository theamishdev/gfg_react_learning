/* Updating Objects using Hooks */
import React, { useState } from 'react'

export default function Hooks3() {
    const [ch, setCh] = useState()
    const initialState = {
        name: '',
        email: '',
        contact: '',
        password: ''
    }
    const [form, setForm] = useState(initialState)
    /* ----------------------------------------------------------------------------------------------------------------- */
    const ChangeButton = (event) => {               /* instead of event we can write e as well */
        setCh(event.target.value)
    }
    /* ----------------------------------------------------------------------------------------------------------------- */
    const Namechange = (e) => {
        setForm({ ...form, name: e.target.value })
    }
    const Emailchange = (e) => {
        setForm({ ...form, email: e.target.value })
    }
    const Contactchange = (e) => {
        setForm({ ...form, contact: e.target.value })
    }

    const Passwordchange = (e) => {
        setForm({ ...form, password: e.target.value })
    }
    console.log(form);

    return (
        <div className="component-container">
            <h2 className="component-title">Form Handling (Hooks3)</h2>

            <div style={{ marginBottom: '20px', borderBottom: '1px solid #444', paddingBottom: '20px' }}>
                <label>Simple Input State:</label>
                <input onChange={ChangeButton} placeholder='Enter text here' className="styled-input" />
                <p>Value: {ch}</p>
            </div>

            <h3>Object State Form</h3>
            <div>
                <label>Name: </label>
                <input onChange={Namechange} type='text' placeholder='Enter Name' className="styled-input" />
            </div>
            <div>
                <label>Email: </label>
                <input onChange={Emailchange} type='email' placeholder='Enter Email' className="styled-input" />
            </div>

            <div>
                <label>Contact: </label>
                <input onChange={Contactchange} type='number' placeholder='Enter Contact' className="styled-input" />
            </div>

            <div>
                <label>Password: </label>
                <input onChange={Passwordchange} type='text' placeholder='Enter Password' className="styled-input" />
            </div>

            <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                <table border="1" style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                    <thead style={{ background: '#333' }}>
                        <tr>
                            <th style={{ padding: '8px' }}>Name</th>
                            <th style={{ padding: '8px' }}>Email</th>
                            <th style={{ padding: '8px' }}>Phone</th>
                            <th style={{ padding: '8px' }}>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={{ padding: '8px' }}>{form.name}</td>
                            <td style={{ padding: '8px' }}>{form.email}</td>
                            <td style={{ padding: '8px' }}>{form.contact}</td>
                            <td style={{ padding: '8px' }}>{form.password}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
