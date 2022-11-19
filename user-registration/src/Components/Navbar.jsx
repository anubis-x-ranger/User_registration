import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='navlinks'>
        <NavLink to="/">
            USERLIST
        </NavLink>
        <NavLink to="/register">
            REGISTER
        </NavLink>
    </div>
  )
}

export default Navbar