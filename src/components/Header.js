import { 
  Search, 
  Home, 
  BusinessCenter,
  AddCard} from '@mui/icons-material'
import React, { useEffect } from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import auth, { authState }  from '../authentication/firebase'

const Header = () => {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  const logoutApp = () => {
    dispatch(logout())
    auth.signOut()
  }

  // useEffect(() => {
  //   authState(auth, (user) => {
  //     if (user) {
  //       setHideMenu(true)
  //     } else {
  //       setHideMenu(false)
  //     }
  //   })
  // }, [])

  return (
    <div className="header">
      <div className="header__left">
        <h2>DTS GRADUATES</h2>
        <div className="header__search">
          <Search />
          <input type="text"/>
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={Home} title="Home" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        {!user ? ("") : (
          <>
            <HeaderOption Icon={AddCard} title="Create CV" />
            <HeaderOption 
              avatar="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg" 
              title="me"
              onClick={logoutApp}
            />
          </>
        )}
      </div>
    </div>
  )
 }

 export default Header;