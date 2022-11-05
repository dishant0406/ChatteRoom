import toast from "react-hot-toast"
import * as api from '../../Functions/api'

export const friendsAction = {
  SET_FRIENDS: 'FRIENDS.SET_FRIENDS',
  SET_PENDING_FRIENDS: 'FRIENDS.SET_PENDING_FRIENDS',
  SET_ONLINE_USERS: 'FRIENDS.SET_ONLINE_USERS',
}

export const getActions = (dispatch) => {
  return {
    sendFriendInvitation: (data, closeDialogHandler) =>
      dispatch(sendFriendInvitation(data, closeDialogHandler)),
    acceptFriendInvitation: (data) => dispatch(acceptFriendInvitation(data)),
    rejectFriendInvitation: (data) => dispatch(rejectFriendInvitation(data))
  }
}

export const setPendingFriendsInvitations = (pendingFriendsInvitation) => {
  return {
    type: friendsAction.SET_PENDING_FRIENDS,
    pendingFriendsInvitation,
  }
}

export const setFriends = (friends) => {
  return {
    type: friendsAction.SET_FRIENDS,
    friends
  }
}

export const setOnlineUsers = (onlineUsers) => {
  return {
    type: friendsAction.SET_ONLINE_USERS,
    onlineUsers
  }
}

const sendFriendInvitation = (data, closeDialogHandler) => {
  return async (dispatch) => {
    const response = await api.sendFriendInvitation(data);

    if (response.error) {
      toast.error(response.exception?.response?.data)
    }
    else {
      toast.success('Invitation has been sent!')
      closeDialogHandler()
    }
  }
}

const acceptFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.acceptFriendInvitation(data)

    if (response.error) {
      toast.error(response.exception?.response?.data)
    }
    else {
      toast.success('Invitation Accepted!')

    }
  }
}

const rejectFriendInvitation = (data) => {
  return async (dispatch) => {
    const response = await api.rejectFriendInvitation(data)

    if (response.error) {
      toast.error(response.exception?.response?.data)
    }
    else {
      toast.success('Invitation Rejected!')

    }
  }
}