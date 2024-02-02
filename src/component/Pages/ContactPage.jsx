import React from 'react'
import './ContactPage.css'
import { FiPhoneCall } from "react-icons/fi";
import{FaLinkedin,FaGithub,FaInstagram,FaFacebook} from"react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const ContactPage = () => {
  return (
    <div className='contact_page'>
      <div className="contact_head">
        <span className="contact_heading">Contact Us</span>
        <span className="contact_heading_des">Any question or remarks? Just write us a message!</span>
      </div>
      <div className="contact_main_div">
        <div className="leftp">
          <div className='left_upper'>
            <span className="contact_infor">Contact Information</span>
            <span className="contact_infor_des">Say something to start a live chat!</span>
          </div>
          <div className='all_details'>
            <div className='icon_ex'>
              <span className='icon_co'><FiPhoneCall color='white'/></span>
              <span className="icon_detail">+917780285794</span>
            </div>
            <div className='icon_ex'>
              <span className='icon_co'><CiMail  color='white'/></span>
              <span className="icon_detail">mohdasrarahmed785@gmail.com</span>
            </div>
            <div className='icon_ex'>
              <span className='icon_co'><IoLocationOutline  color='white'/></span>
              <span className="icon_detail">CCHV+G26, Rd Number 3, Venkateshwara Nagar, Sri Nagar Colony, Aurora Colony, Banjara Hills, Hyderabad, Telangana 500073</span>
            </div>
          </div>
          <div className="socialmediaLinks" >
                        <a href="https://www.linkedin.com/in/mohdasrar687/" target="_blank" className="icons"><FaLinkedin size={25}/></a>
                        <a href="" target="_blank"className="icons"><FaGithub size={25}/></a>
                        <a href="" target="_blank"className="icons"><FaFacebook size={25}/></a>                    
                      </div>
          


        </div>
        <div className="right">
          <div className="first_c">
              <div className="user_name">
                <span className="first_name">First Name</span>
                <input type="text" placeholder='' className='name_input' />
              </div>
              <div className="user_name">
                <span className="first_name">Last Name</span>
                <input type="text"className='name_input'/>
              </div>
          </div>
          <div className="first_c">
              <div className="user_name">
                <span className="first_name">Email</span>
                <input type="email" placeholder='' className='name_input' />
              </div>
              <div className="user_name">
                <span className="first_name">Phone Number</span>
                <input type="phone"className='name_input'/>
              </div>
          </div>
          <div className="first_c">
              <div className="user_name">
                <span className="first_name">Message</span>
                <input type="email" placeholder='Write your message..' className='name_input_x' />
              </div>
  
          </div>
          <div className="btns">
            <button className='btn'>Send Message</button>
          </div>
        </div>


      </div>

    </div>
  )
}

export default ContactPage