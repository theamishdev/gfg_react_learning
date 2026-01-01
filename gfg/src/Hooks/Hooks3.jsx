/* Updating Objects using Hooks */
import React, { useState } from 'react'
export default function Hooks3() {
    const [ch,setCh]=useState()
    const initialState={
        name: '',
        email: '',
        contact: '',
        password: ''
    }
    const [form,setForm]=useState(initialState)
    /* ----------------------------------------------------------------------------------------------------------------- */
    const ChangeButton=(event)=>{               /* instead of event we can write e as well */
        setCh(event.target.value)
    }
    /* ----------------------------------------------------------------------------------------------------------------- */
    const Namechange=(e)=>{
        setForm({...form,name: e.target.value})
    }
    const Emailchange=(e)=>{
        setForm({...form,email: e.target.value})
    }
    const Contactchange=(e)=>{
        setForm({...form,contact: e.target.value})
    }

    const Passwordchange=(e)=>{
        setForm({...form,password: e.target.value})
    }
    console.log(form);
    
    return (
    <div>
    <input onChange={ChangeButton} placeholder='Enter text here'/>
    <p>{ch}</p>
    <div>
        <label>Name: </label>
        <input  onChange={Namechange} type='text' placeholder='Enter Your name here here'/>
    </div>
    <div>
        <label>Email: </label>
        <input  onChange={Emailchange} type='email' placeholder='Enter Email here'/>
    </div>

    <div>
        <label>Contact: </label>
        <input  onChange={Contactchange} type='number' placeholder='Enter Contact details here'/>
    </div>

    <div>
        <label>Password: </label>
        <input  onChange={Passwordchange} type='text' placeholder='Enter your Password here'/>
    </div>
         <table border="1" style={{ marginTop: "20px" }}>
    <thead>
        <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Password</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>{form.name}</td>
            <td>{form.email}</td>
            <td>{form.contact}</td>
            <td>{form.password}</td>
        </tr>
    </tbody>
      </table>
    </div>
  )
}
