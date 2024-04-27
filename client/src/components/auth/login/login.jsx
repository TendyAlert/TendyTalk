import React,{ useContext, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../AuthProvider'
import { updateAuth } from '../../../actions/actionCreators'

import ErrorAlert from '../../alerts/ErrorAlert'
import './login.css'

export default function Login() {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState('')

    const handleChange = (data) => {
        const { name, value } = data.target;
        setFormData (prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const handleLogin = async (data) => {
        data.preventDefault();
        try{
            const response = await axios.post('/api/login', formData);
            const token = response.data.token
            dispatch(updateAuth({
                username: formData.username
            }))

            login(token)
            navigate('/tendytalk')
        }
        catch (error) {
            console.error('Error logging in', error);
            setError("Unable to log in, check your username and password and try again")
        }
    }

  return (
    <div>
        <div className="empty-div"></div>
        {error && <ErrorAlert message={error} />}
        <form onSubmit={ handleLogin }>
            <legend>Log in</legend>
            <div className="row">
                <p className="sign-up-link">Don't have an account? <a href="/auth/signup">Sign up</a></p>
            </div>
            <div className="row has-success">
                <label htmlFor="username" className="col-sm-2 col-form-label">Username:</label>
                <input type="text" id='username' name='username' onChange={handleChange} required/>
            </div>
            <div className="row has-success">
                <label htmlFor="password" className="col-sm-2 col-form-label">Password:</label>
                <input type="password" name='password' id='password' onChange={handleChange} required/>
            </div>
            <div className="row button-row">
                <button type="submit" className='submit btn btn-outline-primary'>Login</button>
            </div>
        </form>
    </div>
  )
}
