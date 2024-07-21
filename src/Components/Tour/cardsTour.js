import React from 'react'
import './CardsTour.css'
import { Link } from 'react-router-dom'
const INFO=[
  {text:"تمامی تورها"},{text:"تور های خارجی"},{text:"تورهای داخلی"},{text:"تور یک روزه "},{text:"تور چند روزه"},{text:"تور کوه نوردی "},{text:"تور کویر گردی"},{text:"تورشمال"},
]
const CardsTour = () => {
  return (
            <>
             <div className='container'>
                      <div className='tour__tabs'>
                              <div className='tour__wrapper'>
                                  <ul className='nav-tabs'>
                                  
                                      {
                                        INFO.map((item,index)=>
                                          <li key={index} >
                                             <Link to="/" className='anchor'>
                                                 {item.text}
                                             </Link>
                                          </li>  
                                        )
                                        
                                      }

                                  </ul>
                              </div>
                      </div>        
             </div>
             <div className='tour__tabs'>
                   <div className='tab-content' >
                        <div className='tab-pane'>
                            <header className='tab-header'>
                                      <div className='tab-text'>تور</div>
                                      <div className='tab-sort-filter tab-text'>
                                           مرتب شده براساس : 
                                           <span className='selectTours'>
                                                <select className='tab-sort-input'>
                                                  <option value="newest">جدیدترین ها</option>
                                                  <option value="viewcount">پربازدیدترین ها</option>
                                                  <option value="cheapest">ارزان ترین ها</option>
                                                </select>
                                            </span> 
                                      </div> 
                            </header>
                            <div className='tabs-content'>
                                  <ul>
                                    <li>
                                      <Link to="/" className='anchor'>
                                         <span>تورکیش دو روز و 3 شب</span>
                                         <p>از1.600.000 هزار تومان</p>
                                         <p>از 2 آذر الی 4 آذر 1402</p>
                                         <p>شرکت خدمات مسافرتی صدرا</p>
                                      </Link>
                                    </li>
                                  </ul>
                            </div>
                            <div className='tabs-content'>
                                  <ul>
                                    <li>
                                      <Link to="/" className='anchor'>
                                         <span>تورکیش دو روز و 3 شب</span>
                                         <p>از1.600.000 هزار تومان</p>
                                         <p>از 2 آذر الی 4 آذر 1402</p>
                                         <p>شرکت خدمات مسافرتی صدرا</p>
                                      </Link>
                                    </li>
                                  </ul>
                            </div>
                            <div className='tabs-content'>
                                  <ul>
                                    <li>
                                      <Link to="/" className='anchor'>
                                         <span>تورکیش دو روز و 3 شب</span>
                                         <p>از1.600.000 هزار تومان</p>
                                         <p>از 2 آذر الی 4 آذر 1402</p>
                                         <p>شرکت خدمات مسافرتی صدرا</p>
                                      </Link>
                                    </li>
                                  </ul>
                            </div>
                        </div>
                    </div>                  
             </div>
            </>
    
  )
}

export default CardsTour