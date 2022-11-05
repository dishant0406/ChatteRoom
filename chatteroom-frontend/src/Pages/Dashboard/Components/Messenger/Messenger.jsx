import React from 'react'
import {styled} from '@mui/material'
import WelcomeMessage from './Components/WelcomeMessage'
import MessengerContent from './Components/MessengerContent'
import {connect} from 'react-redux'

const MainContainer = styled('div')({
    flexGrow:1,
    backgroundColor: '#fff',
    marginTop:'48px',
    display: 'flex',
})


const Messenger = (chat) => {
  return (
    <MainContainer>
      {!chat.chosenChatDetails ? <WelcomeMessage /> : <MessengerContent user={chat.userDetails._id} chosenChatDetails={chat.chosenChatDetails}/>}
    </MainContainer>
  )
}

const mapStoreStateToProps = ({chat, auth})=>{
  return {
    ...chat, ...auth
  }
}

export default connect(mapStoreStateToProps)(Messenger)