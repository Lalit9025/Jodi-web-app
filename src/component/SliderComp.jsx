import React from 'react'
import CustomMarks from './Slider'
import './SliderComp.css'
import Modal from './Modal'


const SliderComp = () => {
  return (
    <div className='slidercomp'>
        <span className="sc_heading">With great planning comes great reward</span>
        <div className="sc_slider">
            <CustomMarks/>
        </div>
    </div>
  )
}

export default SliderComp