import React from 'react'
import '../../App.css'

import Button from '../UI/Button/button'
import Cardtourist from '../tourism/cardtourist'

const Tourism = () => {
  return (
          <>
             <div className='tourism' style={{backgroundImage:'URL(images/tourism.jpg)'}}>
                   <p style={{color:'#fff',fontSize:'46px'}}>پرتال جامع گردش وهنر</p>
                   <p>پرتال جامع گردش وهنر</p>
                   <div className='tourism-box'>
                        <input type='text' className='search-input'placeholder='  جستجوی کشور، شهر و ...' autoComplete="false" />
                        <Button to="/tourism" btnStyles="btn--search--place" btnSize="btn--large">جستجو</Button>
                    </div>
              </div>
              <Cardtourist />
          </>
    
  )
}

export default Tourism