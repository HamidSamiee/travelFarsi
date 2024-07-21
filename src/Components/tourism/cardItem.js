import React from 'react'
import '../cards/cards.css'
import './cardtourist.css'

const CardItem = (Props) => {
          const {src,title,text}=Props;
          return (
          <li className='cards__item'>
                    <div className="compare-item">
                             <div className="compare-image-list">
                                        <img src={src} />
                                        <div className='compere-item-title'>{title}</div>
                                        <div className='compere-item-exp'>{text}</div>
                             </div>
                    </div>
                    
          </li>
  )
}

export default CardItem