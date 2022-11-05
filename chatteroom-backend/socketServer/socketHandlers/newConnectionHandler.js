const serverStore = require('../serverStore');
const friendsUpdate = require('./updates/friends')

const newConnectionHandler = async (socket, _) => {
  const userDetails = socket.user
  serverStore.addNewConnectedUser({
    socketId: socket.id,
    userId: userDetails.userId,
  })

  //update pending friends invitation list
  friendsUpdate.updateFriendsPendingInvitations(userDetails.userId)

  friendsUpdate.updateFriends(userDetails.userId)
}

module.exports = newConnectionHandler