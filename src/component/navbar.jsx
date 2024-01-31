import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar_div'>
           <Link to={'/'}className='navbar_logo'>Jodi.com</Link>
        
          <div className="navbar_items">
           <Link className='navbar_items_element' to='/' >Home</Link>
           <Link className='navbar_items_element' to='/about' >About us</Link>
           <Link className='navbar_items_element' to='/FAQs' >FAQs</Link>
           <Link className='navbar_items_element' to='/blogs' >Blogs</Link>
           <Link className='navbar_items_element' to ='/contactus'>Contact us</Link>
          </div>
       </div>
    </nav>
  )
}

export default Navbar