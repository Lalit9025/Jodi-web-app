import React from 'react'
import Blogscomp from './Blogscomp'
import shoes from './Images/shoes.png'
import './Blogs.css'
const Blogs = () => {
  return (
    <div className='blogs'>
        <Blogscomp 
          img={shoes} 
          title='Valentine Day and Money: Finding the
          Balance Between Splurging and Saving' 
          des='Valentines Day, the holiday of hearts and chocolates, can be
          tricky financially. Caught…'
          date="24th January 2024"
          comment="0 comments"
        />
        <Blogscomp 
          img={shoes} 
          title='Valentine Day and Money: Finding the
          Balance Between Splurging and Saving' 
          des='Valentines Day, the holiday of hearts and chocolates, can be
          tricky financially. Caught…'
          date="24th January 2024"
          comment="0 comments"
        />
        <Blogscomp 
          img={shoes} 
          title='Valentine Day and Money: Finding the
          Balance Between Splurging and Saving' 
          des='Valentines Day, the holiday of hearts and chocolates, can be
          tricky financially. Caught…'
          date="24th January 2024"
          comment="0 comments"
        />
        <Blogscomp 
          img={shoes} 
          title='Valentine Day and Money: Finding the
          Balance Between Splurging and Saving' 
          des='Valentines Day, the holiday of hearts and chocolates, can be
          tricky financially. Caught…'
          date="24th January 2024"
          comment="0 comments"
        />
    </div>
  )
}

export default Blogs