import React, { useState } from 'react'
import { Nav, Dropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { List } from 'react-bootstrap-icons'

import "./nav.css"

export default function Navbar() {
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
            <Nav.Item>
                <Dropdown>
                    <Dropdown.Toggle variant='success' id='nav-dropdown' className='dropdown-toggle:after'>
                        <List />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href='/about'>About</Dropdown.Item>
                        <Dropdown.Item href='/contact'>Contact</Dropdown.Item>
                        <Dropdown.Item href='/auth/login'>Log in</Dropdown.Item>
                        <Dropdown.Item href='/auth/logout'>Log out</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Nav.Item>
        </div>
    </Nav>
  )
}
