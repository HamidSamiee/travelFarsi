import React from 'react'
import '../../App.css'
import Button from '../UI/Button/button'
import CardsTour from '../Tour/cardsTour'

const Tour = () => {
  return (
    <>
    <div className='tourism' style={{backgroundImage:'URL(images/tourism.jpg)'}}>
          <div className='tourism-box'>
                        <input type='text' className='search-input'placeholder='  جستجوی کشور، شهر و ...' autoComplete="false" />
                        <Button to="/tour" btnStyles="btn--search--place" btnSize="btn--large">جستجو</Button>
           </div>
    </div>
    <CardsTour />
    </>
  )
}

export default Tour