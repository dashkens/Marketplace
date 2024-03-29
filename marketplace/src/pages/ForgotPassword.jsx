import { getAuth, sendPasswordResetEmail } from "firebase/auth"
import { useState } from "react"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ArrowRightIcon from '../assets/svg/keyboardArrowRightIcon.svg?react'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const onChange = (e) => setEmail(e.target.value)

  const onSubmit = async (e) => {
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success('Email was sent')
    } catch (error) {
      toast.error('Could not send reset password link')
    }
  }

  return (
    <div className="pageContainer">
      <header>
        <p className="pageHeader">Forgot Password</p>
      </header>
      <main>
        <form onSubmit={onSubmit}>
          <input 
            type="email" 
            className="emailInput" 
            id="email" 
            value={email} 
            placeholder="Email" 
            onChange={onChange} />
            <Link className="forgotPasswordLink" to="/sign-in">Sign In</Link>
            <div className="signInBar">
              <div className="signInText">Send reset link</div>
              <button className="signInButton">
                <ArrowRightIcon fill="#fff" width="34px" height="34px"/>
              </button>
            </div>
        </form>
      </main>
    </div>
  )
}
