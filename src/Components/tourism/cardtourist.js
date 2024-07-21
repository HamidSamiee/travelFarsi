import React from 'react'
import '../cards/cards.css'
import CardItem from './cardItem'

const Cardtourist = () => {
  return (
          <div className='cards'>
          <div className='cards__container'>
                    <div className='cards__wrapper'>
                              <ul className='cards__items'>
                                    <CardItem 
                                        src="images/compare.png"
                                        title="دانستنی ها"
                                        text="معرفی جذابیت های ایران و جهان"
                                    /> 
                                     <CardItem
                                        src="images/compare.png"
                                        title="جستجوی پیشرفته"
                                        text="جستجوی تمامی مقاصد سفرهای شما"
                                     />
                                     <CardItem
                                        src="images/compare.png"
                                        title="راهنمای جامع گردش و تفریح"
                                        text="راهنمای سفر به شهرهای ایران و جهان"
                                     />   
                              </ul>
                    </div>

          </div>
    </div>
  )
}

export default Cardtourist