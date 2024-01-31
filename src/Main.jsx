import React from 'react'
import HomePage from './component/HomePage'
import Steps from './component/Steps'
import SliderComp from './component/SliderComp'
import { Element } from 'react-scroll'
import ImageCarousel from './component/ImageCarousel'


const Main = () => {
  return (
    <>
      <HomePage/>
      <Element name="steps">
        <ImageCarousel/>
          <Steps />
        </Element>
      <SliderComp/>

    </>
  )
}

export default Main