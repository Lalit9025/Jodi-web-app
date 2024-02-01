import React from 'react'
import HomePage from './component/HomePage'
import Steps from './component/Steps'
import SliderComp from './component/SliderComp'
import { Element } from 'react-scroll'
import ImageCarousel from './component/ImageCarousel'
import ImageCarousel2 from './component/ImageCarousel2'
import Post from './component/Post'


const Main = () => {
  return (
    <>
      <HomePage/>
      <Element name="steps">
        <ImageCarousel2/>
        <ImageCarousel/>
        </Element>
        <Steps />
        <Post/>
      <SliderComp/>

    </>
  )
}

export default Main