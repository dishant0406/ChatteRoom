import React from 'react'
import {styled} from '@mui/material'
import DropdownMenu from './DropdownMenu'
import ChosenOpenLabel from './ChosenOpenLabel'

const MainContainer = styled('div')({
  position: 'absolute',
  right: '35px',
  top: '10px',
  height: '48px',
  backgroundColor: '#f5f5f5',
  // width: 'calc(100% - 295px)',
  width: 'calc(100% - 300px)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 15px',
  borderRadius: '10px',
  boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)'
})


const AppBar = () => {
  return (
    <MainContainer>
      <ChosenOpenLabel/>
      <DropdownMenu/>
    </MainContainer>
  )
}

export default AppBar