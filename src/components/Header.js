import { 
  Search, 
  Home, 
  BusinessCenter,
  AddCard} from '@mui/icons-material'
import React from 'react'
import './Header.css'
import HeaderOption from './HeaderOption'

const Header = () => {
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
        <HeaderOption Icon={AddCard} title="Create CV" />
        <HeaderOption avatar="https://pbs.twimg.com/profile_images/1020939891457241088/fcbu814K_400x400.jpg" title="me" />
      </div>
    </div>
  )
 }

 export default Header;