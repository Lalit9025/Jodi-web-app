import React from 'react'
import './HomePage.css'
import { Link } from 'react-scroll';
const HomePage = () => {
  return (
    <div className='home_page'>
         <div className="home_page_content">
            <h2 className='home_page_heading'>Plan Now, Pay Smarter !!</h2>
            <span className='home_page_text'>Jodi is India's #1 lifestyle investment management app that enables couples and partners to plan, save, invest and spend in the most rewarding way to enjoy life, debt-free.</span>
            <Link activeClass="active" to="steps" spy={true} smooth={true} offset={0} duration={500}>
            <div >
              <button to='/9171'  className="home_page_btn">Get Started</button>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default HomePage


