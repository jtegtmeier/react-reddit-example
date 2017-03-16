import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () =>
  <nav>
    <NavLink exact to="/">MainPage</NavLink>
    <NavLink to="/login">Login</NavLink>
    <NavLink to="/createaccount">CreateAccount</NavLink>
    <NavLink to="/about">About</NavLink>
  </nav>

export default Header
