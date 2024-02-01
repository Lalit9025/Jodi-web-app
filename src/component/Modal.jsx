import React, { useEffect, useState } from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";
import './Modal.css'
import Modal2 from './Modal2';
import family from './Images/family.jpg'

const Modal = ({open,setOpen}) => {
       
  const [openm,setOpenm] = useState(false);

    useEffect(() => {
        // Add the class to the body when the modal is opened
        document.body.style.overflow = 'hidden';
    
        // Remove the class when the component is unmounted (modal is closed)
        return () => {
          document.body.style.overflow = 'unset';
        };
      }, []);
  return (
    <>
       <div className="overlay_modal"></div>
      <div className='modal_body'>
        <div className='modal_logo'>
            <span className="modal_title">Multiple</span>
            <IoIosCloseCircleOutline size={35} className='modal_title_btn' onClick={()=>setOpen(false)}/>
        </div>
        <div className="modal_head_text">
            Kickstart your multiple journey - let's  roll !
        </div>
        <div className="modal_img"><img src={family}/></div>
        <div className="modal_steps">
            <div className="modal_steps_heading">3 simple steps</div>
            <div className="modal_steps_h">
                <div className="modal_steps_div">1 . Pick your goal and set up an auto-investment schedule</div>
                <div className="modal_steps_div">2 . Pick a brand that you would like to redeem your goal amount with</div>
                <div className="modal_steps_div">3 . At the end of the goal duration, get a brand voucher to redeem goal</div>
            </div>
            <div className='modal_cancel_line'>Cancel anytime and get a full refund</div>
        </div>
        <div className='m_btn'>
            <button className="button-31" onClick={() => {
              setOpenm(true);
              // setOpen(false);
              }}>Let's do this !</button>
        </div>
        <div className='mm_modal'>{openm && <Modal2 openm={openm} setOpenm={setOpenm} setOpen={setOpen}/>}</div>

    </div>
    {/* <Modal2 openm={openm}  setOpenm={setOpenm}/> */}
    </>
    
  )
}

export default Modal