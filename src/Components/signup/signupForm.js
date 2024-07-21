import React from 'react'
import './signupform.css'

import Button  from '../UI/Button/button'
const SignupForm = () => {
  return (
    <div className='signup-container'>
        <form className='signup-form'>
            
            <input className='text-input' type='text' placeholder='نام ونام خانوادگی خود را وارد کنید' />
            <input className='text-input' type='email' placeholder='آدرس پست الکترونیکی خود را وارد کنید' />
            <input className='text-input' type='number' placeholder='شماره تلفن خود را وارد کنید' />
            <input className='text-input' type='password' placeholder='رمز خود را وارد کنید' />

            <Button btnStyles="btn--tour" btnSize="btn--large">
                ثبت نام
            </Button>
        </form>
    </div>
  )
}

export default SignupForm