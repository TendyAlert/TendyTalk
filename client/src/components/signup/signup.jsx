import React, { useState } from 'react'
import axios from 'axios'

import './signup.css'



export default function Signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (data) => {
        const { name, value } = data.target;
        setFormData (prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleSignup = async (data) => {
        data.preventDefault();
        try{
            axios.post('/auth/signup', formData);
        }
        catch (error) {
            console.error('Error', error);
        }
    }

  return (
    <div className='singup' onSubmit={handleSignup}> 
        <form action="POST">
            <legend>Sign Up</legend>
            <div className="row has-success">
                <label htmlFor="username" class="col-sm-2 col-form-label">Username:</label>
                <input type="text" id='username' name='username' onChange={handleChange} required/>
            </div>
            <div className="row">
                <label htmlFor="email" class="col-sm-2 col-form-label">Email(Optional):</label>
                <input type="email" name="email" id="email" placeholder='email@email.com' onChange={handleChange}/>
            </div>
            <div className="row has-success">
                <label htmlFor="password" class="col-sm-2 col-form-label">Password:</label>
                <input type="password" id='password' onChange={handleChange} required/>
            </div>
            <div className="row">
                <button type="submit" className='submit btn btn-outline-primary'>Submit</button>
            </div>
        </form>
    </div>
  )
}
