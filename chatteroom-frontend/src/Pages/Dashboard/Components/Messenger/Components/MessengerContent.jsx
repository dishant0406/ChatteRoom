import React, {useEffect} from 'react'
import { styled } from '@mui/system'
import Messages from './Messages/Messages'
import NewMessageInput from './NewMessageInput'
import {getDirectChatHistory} from '../../../../../realTimeCommunication/socketConnection'

const Wrapper = styled('div')({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

const MessengerContent = ({chosenChatDetails, user}) => {
  useEffect(() => {
    getDirectChatHistory({receiverId:chosenChatDetails.id})
  }, [chosenChatDetails])
  

  return (
    <Wrapper>
      <Messages user={user}/>
      <NewMessageInput/>
    </Wrapper>
  )
}

export default MessengerContent