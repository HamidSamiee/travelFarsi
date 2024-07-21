import React from 'react'
import './cards.css'
import CardsItem from './cardcItem'

const Cards = () => {
  return (
    <div className='cards'>
          <h1>مقاصد برتر</h1>
          <div className='cards__container'>
                    <div className='cards__wrapper'>
                          <ul className='cards__items'>
                            <CardsItem 
                                path="/"
                                lable="ناشناخته ها" 
                                src='images/9.jpg'
                                text="دیدن آبشار ناشناخته در دل جنگل های آمازون"       
                            />
                            <CardsItem 
                                path="/"
                                lable="ناشناخته ها" 
                                src='images/8.jpg'
                                text="کویری زیبا در قلب ایران"       
                            />
                          </ul>
                          <ul className='cards__items'>
                            <CardsItem 
                                path="/"
                                lable="ناشناخته ها" 
                                src='images/7.jpg'
                                text="دیدن آبشار ناشناخته در دل جنگل های آمازون"       
                            />
                            <CardsItem 
                                path="/"
                                lable="ناشناخته ها" 
                                src='images/6.jpg'
                                text="دیدن آبشار ناشناخته در دل جنگل های آمازون"       
                            />
                            <CardsItem 
                                path="/"
                                lable="ناشناخته ها" 
                                src='images/5.jpg'
                                text="دیدن آبشار ناشناخته در دل جنگل های آمازون"       
                            />
                          </ul>
                    </div>
          </div>
    </div>
  )
}

export default Cards