import React,{ useState } from 'react'
import axios from 'axios'

import './login.css'

export default function Login() {

    const [formData, setFormData] = useState({
        username: '',
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
    <div>
        <div className="empty-div"></div>
        <form action="GET" onSubmit={handleSignup}>
            <legend>Log in</legend>
            <div className="row">
                <p className="sign-up-link">Don't have an account? <a href="/auth/signup">Sign up</a></p>
            </div>
            <div className="row has-success">
                <label htmlFor="username" class="col-sm-2 col-form-label">Username:</label>
                <input type="text" id='username' name='username' onChange={handleChange} required/>
            </div>
            <div className="row has-success">
                <label htmlFor="password" class="col-sm-2 col-form-label">Password:</label>
                <input type="password" id='password' onChange={handleChange} required/>
            </div>
            <div className="row button-row">
                <button type="submit" className='submit btn btn-outline-primary'>Login</button>
            </div>
        </form>
    </div>
  )
}
