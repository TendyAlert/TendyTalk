import React from 'react'

import './signup.css'



export default function signup() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    });

    const handleChange = (data) => {
        const { name, value } = data.target;
        setFormData = (prevState => ({
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
        <form action="POST" className='form'>
            <div className="form-row">
                <label htmlFor="username">
                    Username: <input type="text" id='username' required/>
                </label>
            </div>
            <div className="form-row">
                <label htmlFor="email">
                    Email(Optional): <input type="email" name="email" id="email" placeholder='email@email.com' onChange={handleChange}/>
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
