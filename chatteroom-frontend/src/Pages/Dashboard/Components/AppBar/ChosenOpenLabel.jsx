import React from 'react'
import {connect} from 'react-redux'
import { Typography } from '@mui/material'

const ChosenOpenLabel = ({name}) => {
  return (
    <Typography
    sx={{fontSize:'16px', color:'#2c303e', fontWeight:'bold', fontFamily: 'Poppins'}}
    >
      {`${name? name:'Chatteroom'}`}
    </Typography>
  )
}

const mapStoreStateToProps = (state)=>{
  return {
    name:state.chat.chosenChatDetails?.name,
  }
}

export default connect(mapStoreStateToProps)(ChosenOpenLabel)