import Avatar from '@mui/material/Avatar'
import { 
  Public, 
  AssignmentInd
} from '@mui/icons-material'
import React from 'react'
import InputOption from './InputOption'
import './Graduate.css'

const Graduate = ({ name, description, message, photoUrl, graduate }) => {
  return (
    <div className="graduate">
      <div className="graduate__tag">
        {graduate}
      </div>
      <div className="graduate__header">
        <Avatar sx={{ width: 56, height: 56 }}/>
        <div className="graduate__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="graduate__body">
        <p>{message}</p>
      </div>
      <div className="graduate__buttons">
        <InputOption Icon={Public} title="Portfolio" color="gray" />
        <InputOption Icon={AssignmentInd} title="CV" color="gray" />
      </div>
  </div>
 )
}
export default Graduate