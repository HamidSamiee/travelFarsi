import React from 'react';
import './cards.css';
import { Link } from 'react-router-dom';

const CardsItem = (Props) => {
          const {path,lable,src,text}=Props;
  return (
          <li className='cards__item'>
              <Link className='cards__item__link' to={path}>
                  <figure className='cards__item__pic__wrap' data-category={lable} >
                    <img src={src} alt={src} className='cards__item__img' />
                  </figure>
                  <div className='cards__item__info'>
                     <h5 className='cards__item__text'>{text}</h5>
                  </div>
              </Link>      
          </li>
    
  )
}

export default CardsItem