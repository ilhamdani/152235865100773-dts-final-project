import React from 'react'
import Avatar from '@mui/material/Avatar'
import './HeaderOption.css'
const HeaderOption = ({ avatar, Icon, title, onClick }) => {
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  )
}
export default HeaderOption