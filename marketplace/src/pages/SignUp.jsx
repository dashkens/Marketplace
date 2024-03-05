import React, { useState } from 'react'
import ArrowRightIcon from '../assets/svg/keyboardArrowRightIcon.svg?react'
import visibilityIcon from '../assets/svg/visibilityIcon.svg'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const {name, email, password} = formData
  
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      // getting email/password based on id
      [e.target.id]: e.target.value
    }) )
  }
  return (
    <>
    <div className="pageContainer">
      <header>
        <p className="pageHeader">
          Welcome!
        </p>
      </header>
      <main>
        <form>
        <input 
          type="text" 
          value={email} 
          id="name" 
          className='nameInput' 
          placeholder='Name'
          onChange={onChange}
          />
          <input 
          type="email" 
          value={email} 
          id="email" 
          className='emailInput' 
          placeholder='Email'
          onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input type={showPassword? 'text' : 'password'} 
              className='passwordInput'
              placeholder='Password'
              id='password'
              value = {password}
              onChange={onChange}
            />
            <img 
            src={visibilityIcon} 
            alt="show password" 
            className="showPassword"
            onClick = {()=> setShowPassword((prevState) => !prevState )} />
          </div>
          <Link to='/forgot-password' className='forgotPasswordLink'>Forgot Password</Link>
          <div className="signUpBar">
            <p className="signUpText">
              Sign Up
            </p>
            <button className="signUpButton">
              <ArrowRightIcon fill='#fff' width='34px' height='34px'/>
            </button>
          </div>
        </form>

        {/* GoogleAuth ocmponent */}
        <Link to='/sign-in' className='registerLink'>Sign In Instead</Link>
      </main>
    </div>
    </>
  )
}
