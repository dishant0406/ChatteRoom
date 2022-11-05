import React from 'react'
import Avatar from '../../../../../Components/Avatar/Avatar'
import Button from '@mui/material/Button'
import  Typography  from '@mui/material/Typography'
import OnlineIndicator from './OnlineIndicator'
import { getActions } from '../../../../../store/actions/chatActions'
import { chatTypes } from '../../../../../store/actions/chatActions'
import {connect} from 'react-redux'

const FriendsListItem = ({id, username, isOnline, setChosenChatDetails, chosenChatDetails}) => {
  const handleChooseActiveConversation =()=>{
    setChosenChatDetails({id:id, name:username}, chatTypes.DIRECT)
  }


  return (
    <Button
    onClick={handleChooseActiveConversation}
      style={chosenChatDetails?.id === id ? {
        width: '90%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform:'none',
        color:'white',
        position: 'relative',
        backgroundColor:'#1f1f1f',
        padding: '30px 0',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        
      }: {
        width: '90%',
        height: '42px',
        marginTop: '10px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textTransform:'none',
        color:'black',
        position: 'relative',
        backgroundColor:'#fff',
        padding: '30px 0',
        boxShadow: '0 5px 10px rgba(0, 0, 0, 0.1)',
        
      }}
    >
      <Avatar username={username} writer={null} friendlist/>
      <Typography 
        style={chosenChatDetails?.id===id ? {
          marginLeft: '7px',
          fontWeight:500,
          color: '#fff',
          fontFamily: 'Poppins'
        }: {
          marginLeft: '7px',
          fontWeight:500,
          color: '#2c303e',
          fontFamily: 'Poppins'
        }}
        variant='subtitle1'
        align='left'
      >{username}</Typography>
      {isOnline && <OnlineIndicator/>}
    </Button>
  )
}

const mapActionsToProps = (dispatch) =>{
  return {
    ...getActions(dispatch), 
  }
}

const mapStateToProps = ({chat})=>{
  return {
    ...chat
  }
}

export default connect(mapStateToProps, mapActionsToProps)(FriendsListItem)