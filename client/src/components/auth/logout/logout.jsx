import React from 'react'

export default function Logout() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

  return (
    <div>
        <div className="empty-div"></div>
        <form action="POST" onSubmit={ handleSubmit }>
            <legend>Are you sure you want to log out?</legend>
            <div className="row">
                <button type="submit" className="btn btn-outline-danger">Log Out</button>
            </div>
        </form>
    </div>
  )
}
