import React from 'react'
import PostComponent from './PostComponent'
import p1 from './Images/po1.jpeg'
import p2 from './Images/po2.jpeg'
import p3 from './Images/po3.jpeg'
import p4 from './Images/po4.jpeg'
import './Post.css'


const Post = () => {
  return (
    <div className='post'>
        <PostComponent 
          heading ="Smarter spends get greater returns" 
          des ="Auto-invest as you save up for a lifestyle goal to
          earn big. Redeem your goal with a brand to
          earn bigger."
          img = {p1}
        />
         <PostComponent 
          heading ="Set it and forget it" 
          des ="Schedule your auto-investment plan once, and
          witness your dreams come to life. Sit back, relax
          and enjoy the monthly returns!"
          img = {p2}
          prev={'prev'}
        />
         <PostComponent 
          heading ="Enjoy absolute control" 
          des ="Your money, your call. You decide if you want to redeem
          with a brand or withdraw your investment with returns.
          Redeem or withdraw anytime!"
          img = {p3}
        />
         <PostComponent 
          heading ="Assured
          Gratification" 
          des ="The only thing you need to give up is a life of
          compromise. Prioritise your wishes by planning
          for them.
          Dream more, pay less. Look no further to level-
          up your lifestyle."
          img = {p4}
          prev={'prev'}
        />
    </div>
  )
}

export default Post