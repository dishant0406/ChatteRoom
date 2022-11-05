import React from 'react'
import {styled} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
const AvatarPreview = styled('div')({
  height: '42px',
  width: '42px',
  backgroundColor: '#1f1f1f',
  borderRadius: '42px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '30px',
  fontWeight: '700',
  marginLeft: '5px',
  color: 'white'

})

const Avatar = ({username, writer}) => {
  // console.log(writer)
  return (
    <AvatarPreview style={
       writer===undefined ? {
      backgroundColor:'#725af2'
    }: {}}>
      {username?.substring(0, 1).toUpperCase()}
      {!username && <PersonIcon/>}
    </AvatarPreview>
  )
}

export default Avatar