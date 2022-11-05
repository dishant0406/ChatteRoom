import React from 'react'
import {Typography} from '@mui/material'

const FriendsTitle = ({title}) => {
  return (
    <Typography 
    sx={{
      color: '#2c303e',
      fontSize: '20px',
      marginTop: '10px',
      fontWeight: '700',
      fontFamily: 'Poppins'
    }}
    >
      {title}
    </Typography>
  )
}

export default FriendsTitle