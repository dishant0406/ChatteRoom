import React from 'react'
import AddFriendButton from './AppFriendButton'
import FriendsTitle from './FriendsTitle'
import FriendsList from './FriendsList/FriendsList'
import PendingInvitationsList from './PendingInvitationsList/PendingInvitationsList'
import {styled} from '@mui/material'

const MainContainer = styled('div')({
  width: '224px',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#f9fbfc',
  position:'relative'
})

const FriendSidebar = () => {
  return (
    <MainContainer>
      
      <FriendsTitle title='Chats' />
      <FriendsList/>
      <FriendsTitle title='Requests' />
      <AddFriendButton/>
      <PendingInvitationsList/>

    </MainContainer>
  )
}

export default FriendSidebar