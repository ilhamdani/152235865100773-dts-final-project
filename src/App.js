import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Graduates from './components/Graduates';
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from './features/userSlice';
import LoginPage from './components/LoginPage';
import auth, { authState } from './authentication/firebase';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    authState(auth, (user) => {
      if (user) {
        dispatch(login({ email: user.email}))
      } else {
        // alert(message)
        console.log("you should login first");
      }
    })
  }, [])

  return (
    <div className="app">
      <Header />
      {!user ? (<LoginPage />) : (
        <div className="app__body">
          <Graduates />
        </div>
      )}
    </div>
  );
}

export default App;
