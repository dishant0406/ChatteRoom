import React from 'react'
import MainPageButton from './MainPageButton'
import {styled} from '@mui/material'

const MainContainer = styled('div')({
  width: '72px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#268d61',

})

const Sidebar = () => {
  return (
    <MainContainer>
      <MainPageButton/>
    </MainContainer>
  )
}

export default Sidebar