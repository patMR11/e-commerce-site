import React, { useState } from 'react'
import './Register.css'

function Register({setUser}) {
  const [formdata, setFormData]= useState({
    firstName:'',
    lastName: '',
    email: '',
    password: ''
  })
  const handleSumbit=(e) =>{
    e.preventDefault();
    setUser(formdata.firstName.trim())
  }
  return (
    <div className='form-section'>
        <h1>Join the team!</h1>
        <form onSubmit={handleSumbit}>
            <label htmlFor="first">First Name</label>
            <input type="text" placeholder='Enter your first name' name="first" value={formdata.firstName} onChange={(e)=>setFormData({...formdata,firstName:e.target.value})}required/>
            <label htmlFor="last">Last Name</label>
            <input type="text" name = 'last' placeholder='Enter your last name' value={formdata.lastName} onChange={(e)=>setFormData({...formdata,lastName:e.target.value})}required/>
            <label htmlFor="email">E-mail</label>
            <input type="text" name='email' placeholder='Enter your email' value={formdata.email} onChange={(e)=>setFormData({...formdata,email:e.target.value})}required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder='Enter your email' value={formdata.password} onChange={(e)=>setFormData({...formdata,password:e.target.value})}required/>
            <button type='submit' className='submit-form'>Sign Up</button>
        </form>
    </div>
  )
}

export default Register