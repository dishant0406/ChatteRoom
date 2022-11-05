import React, {useState} from 'react'
import { styled } from '@mui/system'
import {connect} from 'react-redux'
import InputEmoji from 'react-input-emoji'
import { sendDirectMessage } from '../../../../../realTimeCommunication/socketConnection'

const MainContainer = styled('div')({
  height: '60px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const Input = styled('input')({
  backgroundColor: '#fcfbfc',
  width: '98%',
  height:'44px',
  color: '#1f1f1f',
  border:'none',
  borderRadius: '8px',
  fontSize: '14px',
  padding: '0 10px'
})

const NewMessageInput = ({chosenChatDetails}) => {
  const [message, setMessage]= useState('')

  const handleMessageValueChange = (e)=>{
    setMessage(e.target.value)
  }

  const handleKeyPressed = e=>{
    if(e.key === 'Enter'){
      handleSendMessage()
    }
  }

  function handleOnEnter (text) {
    handleSendMessage()
  }

  const handleSendMessage = ()=>{

    if(message.length > 0){
      sendDirectMessage(
        {receiverId: chosenChatDetails.id, content: message}
      )
    }

    setMessage('')


  }

  return (
    <MainContainer>
      <InputEmoji
          cleanOnEnter
          value={message}
          onChange={setMessage}
          // onKeyDown={handleKeyPressed}
          onEnter={handleOnEnter}
          placeholder="Type a message"
          fontFamily='Poppins'
        />
    </MainContainer>
  )
}

const mapStoreStateToProps = ({chat}) =>{
 return {
   ...chat
 }
}

export default connect(mapStoreStateToProps)(NewMessageInput)