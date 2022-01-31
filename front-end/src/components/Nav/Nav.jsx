import './Nav.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const authenticated = (
    <>
        <NavLink className="link" to="/signout">Sign Out</NavLink>
    </>
)
const unauthenticated = (
    <>
        <NavLink className="link" to="/signin">Sign In</NavLink>
    </>
)
const alwaysOptions = (
    <>
        <NavLink className="link" to="/animes/create">Add an Anime</NavLink>
    </>
)
const Nav = ({ user }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = (() => {
    setMenuOpen(!menuOpen)
  })

    return (
      <div className="nav">
      <div className="nav-body">
        <NavLink className="logo" to="/">Anime Database</NavLink>
        <div className="links">
          {user && <div className="link-welcome">Welcome, {user.username}!</div>}
          {alwaysOptions}
                  {user ? authenticated : unauthenticated}  
      </div>

        <div className="curtain">
          <div className='curtainBtn'>
            <button className='menuBtn' onClick={toggleMenu}>Animes</button>
          </div>
          
          <div className={`overlay ${menuOpen ? ' showMenu' : ''}`}>
            <button className='overlayBtn' onClick={toggleMenu}>X</button>
            <div className='overlay-content'>
              {alwaysOptions}
              {user ? authenticated : unauthenticated}
            </div>
          </div>
        </div>
      </div>
            </div>
        )
}
export default Nav