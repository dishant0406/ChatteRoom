import React from 'react'
import Box from '@mui/material/Box'
import {styled} from '@mui/system';

const BoxWrapper = styled('div')({
  width: '100%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#c8c8c8'
})

const AuthComp = (props) => {
  return (
   <BoxWrapper>
     <Box sx={{
       width: 700,
       height:400,
       bgcolor: '#36393f',
       borderRadius:'5px',
       display: 'flex',
       flexDirection: 'column',
       padding:'25px'
     }}>
       {props.children}
     </Box>
   </BoxWrapper>
  )
}

export default AuthComp