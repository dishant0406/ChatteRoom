const User = require('../../../models/user')
const FriendInvitation = require('../../../models/friendInvitation')
const serverStore = require('../../serverStore')

const updateFriendsPendingInvitations = async (userId) => {
  try {
    const pendingInvitations = await FriendInvitation.find({
      receiverId: userId
    }).populate('senderId', '_id username mail')

    //find if user of specified userId has active connections
    //find all active connections for specific user id
    const receiverList = serverStore.getActiveConnections(userId)

    const io = serverStore.getSocketServerInstance()

    receiverList.forEach(receiverSocketId => {
      io.to(receiverSocketId).emit('friends-invitations', {
        pendingInvitations: pendingInvitations ? pendingInvitations : []
      })
    })

  } catch (error) {
    console.log(error)
  }
}

const updateFriends = async (userId) => {
  try {
    //find active connection of specific id
    const receiverList = serverStore.getActiveConnections(userId);

    if (receiverList.length > 0) {

      const user = await User.findById(userId, { _id: 1, friends: 1 }).populate('friends', '_id username mail')

      if (user) {
        const friendsList = user.friends.map(f => {
          return {
            id: f._id,
            mail: f.mail,
            username: f.username
          }
        })



        //get server instance
        const io = serverStore.getSocketServerInstance()

        receiverList.forEach(receiverSocketId => {
          io.to(receiverSocketId).emit('friends-list', {
            friends: friendsList ? friendsList : []
          })
        })
      }

    }


  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  updateFriendsPendingInvitations,
  updateFriends
}