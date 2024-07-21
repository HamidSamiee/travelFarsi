import React from 'react';
import './herosection.css';
import Button from '../UI/Button/button.js';

const Herosection = () => {
  return (
    <div className='hero-container'>
          <video src="/videos/1.mp4" autoPlay muted loop />
          <div className='hero-buttons'>
                    <input type='text' className='search-input'placeholder='  جستجوی کشور، شهر و ...' autoComplete="false" />
                    <Button to="/" btnStyles="btn--search">جستجو</Button>
          </div>
    </div>
  )
}

export default Herosection