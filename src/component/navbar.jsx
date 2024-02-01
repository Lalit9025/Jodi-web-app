// import React from 'react'
// import './navbar.css'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <div className='navbar_div'>
//            <Link to={'/'}className='navbar_logo'>Jodi.com</Link>
        
//           <div className="navbar_items">
//            <Link className='navbar_items_element' to='/' >Home</Link>
//            <Link className='navbar_items_element' to='/about' >About us</Link>
//            <Link className='navbar_items_element' to='/FAQs' >FAQs</Link>
//            <Link className='navbar_items_element' to='/blogs' >Blogs</Link>
//            <Link className='navbar_items_element' to ='/contactus'>Contact us</Link>
//           </div>
//        </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { IoReorderThreeSharp } from "react-icons/io5";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className='navbar'>
      <div className='navbar_div'>
        <div className='nav_up'><Link to={'/'} className='navbar_logo'>
          Jodi
        </Link>

        <div className='navbar_items'>
          {/* Add a button for the dropdown toggle */}
          <Link className='navbar_items_element' to='/' >Home</Link>
          <Link className='navbar_items_element' to='/about' >About us</Link>
           <Link className='navbar_items_element' to='/FAQs' >FAQs</Link>           
           <Link className='navbar_items_element' to='/blogs' >Blogs</Link>          
           <Link className='navbar_items_element' to ='/contactus'>Contact us</Link>
         </div>
         <div className='dropdown_toggle' onClick={toggleDropdown}>
          <IoReorderThreeSharp size={40}/>
         </div>
      </div>
          
      <div className='nav_down'>
      {isDropdownOpen && (
            <div className='dropdown_menu' onClick={toggleDropdown}>
              <Link className='navbar_items_element' to='/'>
                Home
              </Link>
              <Link className='navbar_items_element' to='/about'>
                About us
              </Link>
              <Link className='navbar_items_element' to='/FAQs'>
                FAQs
              </Link>
              <Link className='navbar_items_element' to='/blogs'>
                Blogs
              </Link>
              <Link className='navbar_items_element' to='/contactus'>
                Contact us
              </Link>
            </div>
          )}
      </div>
          
        
      </div>
    </nav>
  );
};

export default Navbar;
