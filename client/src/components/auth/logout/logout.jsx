import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider';

export default function Logout() {
    const navigate = useNavigate()
    const { logout } = useContext(AuthContext)

    const handleLogout = (event) => {
        event.preventDefault();
        logout();

        navigate('/tendytalk/auth/login')
    }

  return (
    <div>
        <div className="empty-div"></div>
        <form onSubmit={ handleLogout }>
            <legend>Are you sure you want to log out?</legend>
            <div className="row">
                <button type="submit" className="btn btn-outline-danger">Log Out</button>
            </div>
        </form>
    </div>
  )
}
