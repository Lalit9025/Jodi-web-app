import React from 'react'
import './Steps.css'
import SingleComponent from './card';
import Stepscomp from './Stepscomp';
const Steps = () => {
  return (
    <div className='steps'>
       <Stepscomp/>
       <SingleComponent/>
    </div>
  )
}

export default Steps