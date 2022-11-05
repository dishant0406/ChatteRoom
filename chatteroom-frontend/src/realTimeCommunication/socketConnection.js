import io from 'socket.io-client'
import store from '../store/store'
import { setPendingFriendsInvitations, setFriends, setOnlineUsers } from '../store/actions/friendsAction'
import { updateDirectChatHistoryIfActive } from '../Functions/chat.js'

let socket = null;

export const connectWithSocketServer = (userDetails) => {
  const jwtToken = userDetails.token;


  socket = io('https://chatappdishant.herokuapp.com/', {
    auth: {
      token: jwtToken,
    }
  })

  socket.on('connect', () => {
    console.log('connection successfull with the socket.io server')
  })

  socket.on('friends-invitations', (data) => {
    const { pendingInvitations } = data;

    store.dispatch(setPendingFriendsInvitations(pendingInvitations))
  })

  socket.on('friends-list', data => {
    const { friends } = data;
    store.dispatch(setFriends(friends))
  })

  socket.on('online-users', (data) => {
    const { onlineUsers } = data;
    store.dispatch(setOnlineUsers(onlineUsers))
  })

  socket.on('direct-chat-history', (data) => {
    updateDirectChatHistoryIfActive(data)
  })
}

export const sendDirectMessage = (data) => {
  socket.emit('direct-message', (data))
}

export const getDirectChatHistory = (data) => {
  socket.emit('direct-chat-history', (data))
}