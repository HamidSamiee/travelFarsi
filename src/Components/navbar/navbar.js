import React, { useEffect, useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/button';

function Navbar() {

  const [menuState,setMenuState]=useState(false);
  const menuHandler = () =>setMenuState(!menuState);
  const closeMenuHandler = () =>setMenuState(!menuState);
  const [btnState,setBtnState]=useState(true);
  useEffect(()=>{
   handleBtn()
  },[])
  const handleBtn = () => {
       if(window.innerWidth<=960){
         setBtnState(false);
       }else{
         setBtnState(true);
       }
   }
  window.addEventListener('resize',handleBtn);
  

  return (
    <nav className='navbar'>
          <div className='navbar-container'>
              <Link to="/" className="navbar-logo" >       
                    Travel<i className="fab fa-typo3" />
              </Link>
              <div className='menu-icon' onClick={menuHandler}>
                          <i className={menuState ? 'fas fa-times':'fas fa-bars'} />
              </div>
              <ul className={menuState ?'nav-menu active':'nav-menu'}>
                  <li className='nav-item'>
                     <Link to="/" className='nav-links' onClick={closeMenuHandler}>
                      صفحه اصلی
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/tourism" className='nav-links' onClick={closeMenuHandler}>
                        گردشگری
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/tour" className='nav-links' onClick={closeMenuHandler}>
                      تور
                     </Link>
                  </li>
                  <li className='nav-item'>
                     <Link to="/signup" className='nav-links-mobile' onClick={closeMenuHandler}>
                      ثبت نام
                     </Link>
                  </li>
              </ul>
              {btnState ? 
              <Button to="/signup" btnStyles='btn--outline'>
                    ثبت نام
              </Button>:null
              }
          </div>
    </nav>
  )
}

export default Navbar;