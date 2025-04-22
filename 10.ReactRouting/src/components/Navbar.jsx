import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router'

//we dont use anchor tag because we dont want to reload page again and again

//why we use Navlink ? kyuki by default uske sath active class attached hoti hai aur styling kar sakte hai

//NavLink has "isActive" flag hum jis route par hote hai wo active mark ho jata hai
// in below example agar route active hoga class ka name active-link ho jayega

const Navbar = () => {
    return (
        <div>
      <ul>
        <li>
            {/* <a href="/"> Home </a> */}
            {/* <Link to="/"> Home </Link> */}
            <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}> Home </NavLink>
        </li>
        <li>
            {/* <a href="/about"> About </a> */}
            <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}> About </NavLink>
        </li>
        <li>
            <NavLink to="/dashboard" className={({isActive}) => isActive ? "active-link" : ""}> Dashboard </NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar

// NavLink is a specialized version of Link that automatically applies an "active" class to the rendered element when the corresponding route is active. This allows for styling and highlighting the active link in a navigation bar or menu