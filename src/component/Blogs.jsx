import React from 'react'
import Blogscomp from './Blogscomp'
import shoes from './Images/shoes.png'
import b1 from './Images/b1.jpg'
import b2 from './Images/b2.jpeg'
import b3 from './Images/b3.avif'
import b4 from './Images/b4.jpg'
import b5 from './Images/b5.png'
import './Blogs.css'
const Blogs = () => {
  return (
    <div className='blogs'>
        <Blogscomp 
          img={b1} 
          title='Decoding Money Mysteries: Cracking the Code to Joint Financial Bliss
          ' 
          des='Feeling stressed about managing finances with your partner? Does budgeting sound like ancient hieroglyphics and joint goals feel like a mythical creature? Breathe easy, lovebirds! Jodi is your Rosetta Stone, translating financial jargon into simple, fun strategies that unlock the secrets to harmonious financial planning. Discover your unique money personalities, laugh away spreadsheet blues with engaging tools, and transform money talks into romantic date night discussions. Learn how open communication and collaborative planning become your secret weapons, building a stronger relationship and financial foundation, together. So, are you ready to crack the code and embark on a financial adventure filled with laughter, understanding, and shared success?
          '
          date="24th January 2024"
          comment="0 comments"
        />
        <Blogscomp 
          img={b2} 
          title='Lifes Milestones Made Easy: From I Do to We Did It!' 
          des="Life's a beautiful journey, but the financial side can sometimes feel like climbing Mount Everest blindfolded. Fear not, adventurous duo! Jodi is your trusty Sherpa, guiding you through every exciting stage with expert advice and user-friendly tools. Are you newlyweds navigating your first budget together? Learn budgeting basics while celebrating your love. Planning to expand your family? Explore childcare costs with confidence. Ready for your dream home? Conquer the homebuying journey with peace of mind. Let Jodi simplify your financial climb, so you can savor each milestone with joy and excitement. So, are you ready to turn life's challenges into thrilling triumphs with Jodi as your guide?"
          date="24th January 2024"
          comment="0 comments"
        />
        <Blogscomp 
          img={b3} 
          title='Invest in Us: Grow Your Love & Money, Effortlessly
          ' 
          des="Imagine this: every coffee date, every grocery run, becomes an investment in your future. Sounds like magic, right? That's the power of Jodi's innovative Spendvesting feature! Discover how your everyday spending automatically fuels your shared dreams. Understand the potential benefits and risks, and explore diverse investment options tailored to your aspirations. Watch your love and money blossom together, as you invest in a brighter future, side-by-side. Are you ready to turn your daily spending into a love potion for your financial dreams?
          "
          date="24th January 2024"
          comment="0 comments"
        />
        <Blogscomp 
          img={b4} 
          title=' Beyond the Numbers: The Emotional Rollercoaster of "We"
          ' 
          des="Money matters can feel like an emotional rollercoaster, especially when you're sharing finances with your partner. Jodi dives into the complex emotions couples face, helping you navigate the ups and downs with understanding and support. Discover strategies for managing expectations honestly, dealing with disagreements constructively, and building a healthy financial identity as a team. Learn how prioritizing open communication and understanding can help you build a stronger emotional foundation, alongside your financial well-being. So, are you ready to navigate the emotional side of finances with compassion and support, strengthening your relationship beyond the numbers?
          "
          comment="0 comments"
        />
        <Blogscomp 
          img={b5} 
          title='Tech & Money: Your Ultimate Dream Team
          ' 
          des="Feeling overwhelmed by apps, tools, and resources in the financial world? Don't worry, tech-savvy duo! Jodi isn't just another app – it's your personalized tech hub for all things finance. Discover how Jodi integrates seamlessly with other relevant apps, leveraging online resources to streamline your financial management. Explore user-friendly features, intuitive interfaces, and helpful tips to make technology your ally, not your enemy. Are you ready to embrace the power of technology and simplify your financial journey with Jodi as your dream team partner?
          "
          comment="0 comments"
        />
    </div>
  )
}

export default Blogs