import React from 'react'
import { styled } from '@mui/system'
import Avatar from '../../../../../../Components/Avatar/Avatar'
import { Typography } from '@mui/material'

const MainContainer = styled('div')({
  width: '98%',
  display: 'flex',
  flexDirection: 'column',
  marginTop: '10px',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '30px'
})

const MessagesHeader = ({name=''}) => {
  return (
    <MainContainer>
      {/* <Avatar large username={name}/> */}
      <Typography variant="h4" sx={{fontWeight:'bold', color: '#000', marginTop: '5px', marginRight: '5px', fontFamily: 'Poppins'}}>{name}</Typography>
      <Typography sx={{color:'#1f1f1f', marginLeft: '5px', marginRight: '5px', fontFamily: 'Poppins', fontWeight: '500', fontSize: '18px'}}>
        Lets get your hand moving! Start talking with {name}
      </Typography>
    </MainContainer>
  )
}

export default MessagesHeader