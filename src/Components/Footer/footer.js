import React from 'react'
import './footer.css'
import Button from '../UI/Button/button'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer-container'>
          <section className='footer-subscription'>
                    <p className='footer-subscription-heading'>
                    به خبرنامه ما بپیوندید تا از آفرهای تورهای ایرانگردی و جهانگردی با خبر شوید  
                    </p>
                    <p className='footer-subscription-text'>
                    هر زمان که بخواهید میتوانید عضویت خود را لغو نمایید
                    </p>
                    <div className='footer-areas'>
                              <form>
                                        <input className='footer-input' type='email' placeholder="ایمیل خود را وارد کنید" />
                                        <Button btnStyles="btn--special" to="/">
                                                  عضویت
                                        </Button>
                              </form>
                    </div>
          </section>
          <div className='footer-links'>
                    <div className='footer-link-wrapper'>
                              <div className='footer-link-items'>
                                        <h2>درباره ما</h2>
                                        <Link to="/">
                                        موقعیت های شغلی
                                        </Link>
                                        <Link to="/">
                                        تماس با ما
                                        </Link>
                                        <Link to="/">
                                        همکاری با ما
                                        </Link>
                              </div>
                              <div className='footer-link-items'>
                                        <h2>راهنما</h2>
                                        <Link to="/">
                                         نقشه سایت 
                                        </Link>
                                        <Link to="/">
                                          سوال های متداول
                                        </Link>
                                        <Link to="/">
                                          حریم شخصی
                                        </Link>
                              </div>
                    </div>
                    <div className='footer-link-wrapper'>
                              <div className='footer-link-items'>
                                        <h2> رزرو</h2>
                                        <Link to="/">
                                        رزرو هتل  
                                        </Link>
                                        <Link to="/">
                                         رزرو بلیط هواپیما 
                                        </Link>
                                        <Link to="/">
                                         رزرو بلیط هتل 
                                        </Link>
                              </div>
                              <div className='footer-link-items'>
                                        <h2 style={{fontSize:'18px'}}>شبکه های اجتماعی</h2>
                                        <Link to="/">
                                         اینستاگرام  
                                        </Link>
                                        <Link to="/">
                                           توئیتر 
                                        </Link>
                                        <Link to="/">
                                          لینکدین 
                                        </Link>
                              </div>
                    </div>
          </div>
          <section className='social-media'>
                    <div className='social-media-wrap'>
                              <div className='footer-logo'>
                                        <Link to="/" className="social-logo" >       
                                        Travel<i className="fab fa-typo3" />
                                        </Link>
                              </div>
                              <small className='website-rights' >
                                        Travel  ©  2023
                              </small>
                              <div className='social-icons '>
                                        <Link to="/" className='social-icon-link facebook'>
                                        <i className="fab fa-facebook-f"></i>
                                        </Link>
                                        <Link to="/" className='social-icon-link instagram'>
                                        <i className="fab fa-instagram"></i>
                                        </Link>
                                        <Link to="/" className='social-icon-link twitter'>
                                        <i className="fab fa-twitter"></i>
                                        </Link>
                                        <Link to="/" className='social-icon-link linkedin'>
                                        <i className="fab fa-linkedin"></i>
                                        </Link>
                              </div>
                    </div>
          </section>
    </div>
  )
}

export default Footer