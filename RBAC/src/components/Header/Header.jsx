import React from 'react'
import Styles from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className={Styles.Header_container} >
      <nav className={Styles.Navbar_links}>
        <ul className={Styles.links_list}>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/About'><li>About</li></NavLink>
          <NavLink to='/Login'><li>Login</li></NavLink>
          <NavLink to='/SignUp'><li>SignUp</li></NavLink>
          <NavLink to='/Admin'><li>Admin</li></NavLink>
          <NavLink to='Admin/Dashboard'><li>Dashboard</li></NavLink>
        </ul>
      </nav>
    </header>
  )
}

export default Header