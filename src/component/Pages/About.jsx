import React from 'react'
import './About.css'
import about1 from '../Images/about1.jpeg'
import about2 from '../Images/about2.jpeg'
const About = () => {
  return (
    <div className='about'>
     <span className='about_heading'>About Us</span>
     <div className="about_start">
        <div className="about_img_sction"><img className='about_img' src={about1}/>'</div>
        <div className="about_img_sction1_text">Jodi is a lifestyle investment management app that helps couples / partnersto plan, save, invest and spend in the most rewarding way toenjoy life, debt free where couples contributes money on their spendings for opting better financial goals for future needs
       </div>
     
     </div>
     <div className="about_start">
        
        <div className="about_img_sction1_text">Set joint financial goals and track your progress together.
        See where your money is going with easy-to-understand expense reports.
        Invest your money and earn up to 8-10% returns.
        Jodi's Spendvesting is a unique approach to financial planning that combines spending and investing. 
       </div>
       <div className="about_img_sction"><img className='about_img' src={about2}/></div>
     
     </div>
     <div className="about_last">
        <span className='about_last_first'>Earn money on your everyday purchases through P2P lending and Brandco investments.
        Use your earnings to pay for your dreams, like a new house, a vacation, or a wedding.
        Build a strong financial foundation together with your partner.
        </span>
        <div className="about_dowload">
        <span className='about_last_second'>Download Jodi today and start managing your finances like a pro!!</span>
        <button className='about_btn'>Download</button>
        </div>
     </div>
    </div>
  )
}

export default About