import React from 'react'
import './PostComponent.css'
import { Link } from 'react-router-dom';


const PostComponent = (props) => {
  return (
    <div className={`post_comp ${props.prev}`}>
        <div className='post_comp_details'>
            <span className="post_comp_heading">{props.heading}</span>
            <span className="post_comp_des">{props.des}</span>
            <Link to='/about'style={{textDecoration:'none'}} > <span className='post_comp_btn'>Tell me more</span></Link>
        </div>
        <div className="post_img_div">
            <img className='post_img' src={props.img}/>
        </div>
    </div>
  )
}

export default PostComponent