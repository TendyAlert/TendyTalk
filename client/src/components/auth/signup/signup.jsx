import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

import './signup.css'



export default function Signup() {
    const navigate = useNavigate()
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
            axios.post('/api/signup', formData);
            navigate('/auth/login')
        }
        catch (error) {
            console.error('Error', error);
        }
    }

  return (
    <div>
        <div className="empty-div"></div>
        <form action="POST" onSubmit={handleSignup}>
            <legend>Sign Up</legend>
            <div className="row has-success">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                <input type="text" id='username' name='username' onChange={handleChange} required/>
            </div>
            <div className="row">
                <label htmlFor="email" className="col-sm-2 col-form-label">Email(Optional):</label>
                <input type="email" name="email" id="email" placeholder='email@email.com' onChange={handleChange}/>
            </div>
            <div className="row has-success">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                <input type="password" name="password" id='password' onChange={handleChange} required/>
            </div>
            <div className="row button-row">
                <button type="submit" className='submit btn btn-outline-primary'>Sign Up</button>
            </div>
        </form>
    </div>
  )
}
