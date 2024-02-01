import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import './Modal2.css'
import shoes from './Images/shoes.png'
import { Button } from '@mui/material';
import family from './Images/family.jpg'

const Modal2 = ({openm,setOpenm,setOpen}) => {
  const budget = 100000;
  const month = 10;
  return (
    <>
      <div className="overlay"></div>
       <div className='modal2'>
        <div className="modal2_head">           
            <FaArrowLeft size={25} className='modal2_head_title' onClick={()=>
                setOpenm(false)
            }/>
            <span className='jodi_head'>Jodi</span>
            <IoIosCloseCircleOutline className='modal2_head_title' size={30} onClick={()=>{
              setOpenm(false);
              setOpen(false)
            }
                
            }/>

        </div>
        <span className='slogan'>Build your saving plan</span>
        <div className="activity">
          <img src={family}/>
          <div className='act_section'>
            <span className='activity_heading'>Home Interior</span>
            <span className='act_des'>Building Future Achievers, Together</span>
          </div>
        </div>
        <div className="details">
          <span className='budget'>Your Budget</span>
          <input placeholder='enter amount' value={budget} type='Number' className='input_taker'/>
        </div>
        <div className="details">
          <span className='budget'>How long will you Invest ?</span>
          <input placeholder='enter amount' value={month} type='Number' className='input_taker'/>
        </div>
        <div className='summary'>
          <div className='you_invest'>
            <span className='y_i'>You invest :</span>
            <span className="ruppes">Rs 80000</span>
            <span className="in_month">(Rs8000/month)</span>
          </div>
          <div className='you_invest'>
            <span className='y_i'>You get :</span>
            <span className="ruppes">Rs 100000</span>
            <span className="in_month">Jodi adds 8%</span>
          </div>
        </div>
        <div className='brand_con'>Brand Contribution : 12%</div>
        <div className="sm_btn"><button className="button-31">Save this goal</button></div>
        <div className="t_c">T&C applied</div>
    </div>
    </>
   
  )
}

export default Modal2