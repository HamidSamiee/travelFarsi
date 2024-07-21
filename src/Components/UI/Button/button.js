import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const STYLES=['btn--primary','btn--outline','btn--special','btn--search','btn--tour','btn--search--place'];
const SIZES=['btn--medium','btn--large']

const Button = (Props) => {
          
          const {to,children,btnStyles,btnSize}=Props;
          const BtnStyles=STYLES.includes(btnStyles) ? btnStyles:STYLES[0];
          const BtnSize=SIZES.includes(btnSize) ? btnSize:SIZES[0];

  return (
    <Link to={to} >
          <button className={`btn ${BtnStyles} ${BtnSize}`}>
                    {children}
          </button>
    </Link>
  )
}

export default Button;