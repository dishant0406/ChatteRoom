import { friendsAction } from "../actions/friendsAction"

const initialState = {
  friends: [],
  pendingFriendsInvitation: [],
  onlineUsers: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case friendsAction.SET_PENDING_FRIENDS:
      return {
        ...state,
        pendingFriendsInvitation: action.pendingFriendsInvitation
      }

    case friendsAction.SET_FRIENDS:
      return {
        ...state,
        friends: action.friends
      }

    case friendsAction.SET_ONLINE_USERS:
      return {
        ...state,
        onlineUsers: action.onlineUsers
      }

    default:
      return state
  }
}

export default reducer