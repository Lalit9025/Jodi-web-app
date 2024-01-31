import React from 'react'
import './Blogscomp.css'
const Blogscomp = (props) => {
  return (
    <div className='blog_comp'>
        <div className="img_blog">
            <img src={props.img}/>
        </div>
        <div className='blog_detail'>
            <span className="blog_heading">{props.title}</span>
            <span className='blog_des'>{props.des}</span>
            <div className='d_co'>
                <span className="date">{props.date}</span>
                <span className='date'>{props.comment}</span>
            </div>

        </div>
    </div>
  )
}

export default Blogscomp