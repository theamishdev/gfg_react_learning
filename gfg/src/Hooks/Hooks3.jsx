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
        <input  onChange={Namechange} placeholder='Enter Your name here here'/>
    </div>
    <div>
        <label>Email: </label>
        <input  onChange={Emailchange} placeholder='Enter Email here'/>
    </div>

    <div>
        <label>Contact: </label>
        <input  onChange={Contactchange} placeholder='Enter Contact details here'/>
    </div>

    <div>
        <label>Password: </label>
        <input  onChange={Passwordchange} placeholder='Enter your Password here'/>
    </div>

    </div>
  )
}
