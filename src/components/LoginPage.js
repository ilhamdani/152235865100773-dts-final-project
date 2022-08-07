import React, { useState } from "react"
import './Login.css'
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";
import { registerFirebase, loginFirebase } from "../authentication/firebase";

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onRegister = async () => {
    const { success, message, user } = await registerFirebase(email, password);
    if (success) {
      dispatch(login({
          email: user.email
      }))
    } else {
      console.log(message);
    }

  }
  const loginToApp = async (e) => {
    e.preventDefault()
    const { success, message, user } = await loginFirebase(email, password);
    if (success) {
      dispatch(login({
          email: user.email
      }))
    } else {
      console.log(message);
    }
  }

  return(
    <div className="login">
      <svg data-testid={LoginIcon}></svg>
      <form>
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" onClick={loginToApp}>Sign In </button>
      </form>
      <p>Not a member?{' '}
        <span onClick={onRegister} className="login__register">Register Now</span>
      </p>
    </div>
  )
}

export default Login