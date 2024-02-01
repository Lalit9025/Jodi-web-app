import React from 'react'
import './Aboutcomp.css';
const Aboutcomp = (props) => {
  return (
    <div className={`aboutcomp ${props.rev}`}>
        <div className="about_img"><img src={props.img}/></div>
        <div className="about_content">
            {/* <span className="about_content_heading">{props.heading}</span> */}
            <span className="about_content_des">{props.des}</span>
        </div>
    </div>
  )
}

export default Aboutcomp