import React from 'react'

export default function ErrorAlert({ message }) {
  return (
    <div>
        <div className="alert alert-dismissible alert-danger">
            <strong>Oh snap!</strong> {message}
        </div>
    </div>
  )
}
