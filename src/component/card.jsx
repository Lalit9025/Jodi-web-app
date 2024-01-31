import React, { useState } from 'react';
import './card.css'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { MdKeyboardArrowRight } from "react-icons/md";
import cloth from './Images/cloth.png'
import education from './Images/education.png'
import gold from './Images/gold.png'
import nature from './Images/nature.png'
import shoes from './Images/shoes.png'
import travel from './Images/travel.png'
import wedding from './Images/wedding.png'

const CARDS = 7;
const MAX_VISIBILITY = 3;

const SingleComponent = () => {
 const [active, setActive] = useState(2);
 const count = CARDS;
 const categories = [
 {
      img:cloth,
      content:"Cloths",
 },
 {
      img:education,
      content:"Education",
 },
 {
      img:gold,
      content:"Gold",
 },
 {
      img:nature,
      content:"Nature",
 },
 {
      img:shoes,
      content:"Shoes",
 },
 {
      img:travel,
      content:"Travel",
 },
 {
      img:wedding,
      content:"Wedding",
 },
 ]
 
 const Card = ({img, content}) => (
    <div className='card' style={{ backgroundImage: `url(${img})`, backgroundSize: "cover" }}>
      <div>{content}</div>
    </div>
 );

 return (
    <div className='single_com'>
     <span className='single_heading'>Categories</span>
     <div className='carousel'>
        {active > 0 && <button className='nav left' onClick={() => setActive(i => i - 1)}></button>}

         {categories.map((category, i) => (
            <div key ={i} className='card-container' style={{
              '--active': i === active ? 1 : 0,
              '--offset': (active - i) / 3,
              '--direction': Math.sign(active - i),
              '--abs-offset': Math.abs(active - i) / 3,
              'pointer-events': active === i ? 'auto' : 'none',
              'opacity': Math.abs(active - i) >= MAX_VISIBILITY ? '0' : '1',
              'display': Math.abs(active - i) > MAX_VISIBILITY ? 'none' : 'block',
              }}>
              <Card img = {category.img} content={category.content}/>
              {console.log(category.img)}
            </div>
         ))}

        {active < count - 1 && <button className='nav right' onClick={() => setActive(i => i + 1)}></button>}
    </div>
    </div>
 );
};

export default SingleComponent;
