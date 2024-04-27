import React, { useState, useContext } from 'react'
import { Nav, Dropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { List } from 'react-bootstrap-icons'
import { AuthContext } from '../auth/AuthProvider'

import "./nav.css"

export default function Navbar() {
    const token = localStorage.getItem('token')
    let username = ''
    if (token) {
        username = token.split(',')[0]
    }
    const { isLoggedIn } = useContext(AuthContext)

    const [ activeKey, setActiveKey ] = useState('/TendyTalk')

    const handleSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    }

  return (
    <Nav className='navbar navbar-expand-lg bg-primary nav-bar' activeKey={activeKey} onSelect={handleSelect}>
        <div className="nav-header">
            <Nav.Link as={NavLink} to="/tendytalk" eventKey={"/tendytalk"} className='navbar-brand'>Tendy Talk</Nav.Link>
        </div>
        <div className="nav-container">
            <div className='username'>
                {token && <p>Hello, {username}</p>}
            </div>
            <div>
                <Nav.Item>
                    <Dropdown>
                        <Dropdown.Toggle variant='success' id='nav-dropdown' className='dropdown-toggle:after'>
                            <List />
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href='#'>About (Under Construction)</Dropdown.Item>
                            <Dropdown.Item href='#'>Contact (Under Construction)</Dropdown.Item>
                            {isLoggedIn ? (
                                <Dropdown.Item href='/tendytalk/auth/logout'>Log out</Dropdown.Item>
                            ) : (
                                <Dropdown.Item href='/tendytalk/auth/login'>Log in</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                </Nav.Item>
            </div>
        </div>
    </Nav>
  )
}
