import React from 'react'

import './signup.css'

export default function login() {
  return (
    <div className='login'>
        <form action="POST" className='form'>
            <div className="form-row">
                <label htmlFor="username">
                    Username: <input type="text" id='username' required/>
                </label>
            </div>
            <div className="form-row">
                <label htmlFor="email">
                    Email(Optional): <input type="email" name="email" id="email" placeholder='email@email.com'/>
                </label>
            </div>
            <div className="form-row">
                <label htmlFor="password">
                    Password: <input type="text" id='password'/>
                </label>
            </div>
            <div className="form-row">
                <button type="submit">Submit</button>
            </div>
        </form>
    </div>
  )
}
