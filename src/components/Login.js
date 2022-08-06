import React from "react"
import './Login.css'
import LoginIcon from '@mui/icons-material/Login';

const Login = () => {
  const register = () => {}
  const loginToApp = () => {}

  return(
    <div className="login">
      <svg data-testid={LoginIcon}></svg>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit" onClick={loginToApp}>Sign In </button>
      </form>
      <p>Not a member?{' '}
        <span onClick={register} className="login__register">Register Now</span>
      </p>
    </div>
  )
}

export default Login