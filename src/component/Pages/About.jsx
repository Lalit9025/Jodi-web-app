import React from 'react'
import './About.css'
import about1 from '../Images/about1.jpg'
import about2 from '../Images/about2.jpeg'
import Aboutcomp from './Aboutcomp'
const About = () => {
  return (
    <div className='about'>
      <div className="about_head">About Us</div>
      <Aboutcomp
       img={about1} 
       heading ="About us"
       des="Jodi is a lifestyle investment management app that helps couples / partnersto plan, save, invest and spend in the most rewarding way toenjoy life, debt free where couples contributes money on their spendings for opting better financial goals for future needs."
      />
       <Aboutcomp
       img={about2} 
       heading ="About us"
       des="Set joint financial goals and track your progress together.
       See where your money is going with easy-to-understand expense reports.
       Invest your money and earn up to 8-10% returns.
       Jodi's Spendvesting is a unique approach to financial planning that combines spending and investing.Earn money on your everyday purchases through P2P lending and Brandco investments.
       Use your earnings to pay for your dreams, like a new house, a vacation, or a wedding.
       Build a strong financial foundation together with your partner. "
       rev="rev"
      />
   
     <div className="about_last">
        <div className="about_dowload">
        <span className='about_last_second'>Download Jodi today and start managing your finances like a pro!!</span>
        <button className='about_btn'>Download</button>
        </div>
     </div> 
    </div>
  )
}

export default About