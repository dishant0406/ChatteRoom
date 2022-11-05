const FriendInvitation = require("../../models/friendInvitation");
const user = require("../../models/user");
const friendUpdate = require("../../socketServer/socketHandlers/updates/friends")

const postInvite = async (req, res) => {
  const { targetMailAddress } = req.body;

  const { userId, mail } = req.user;

  //check if friend that we would like to invite is not the sender

  if (mail.toLowerCase() === targetMailAddress.toLowerCase()) {
    return res.status(409).send('Sorry Cannot send request to your account')
  }

  const targetUser = await user.findOne({ mail: targetMailAddress.toLowerCase() })

  //user not available
  if (!targetUser) {
    return res.status(404).send(`No user with ${targetMailAddress} is available! Check the Email Again!`)
  }

  //check if invitation has been already sent
  const invitationAlreadyRecieved = await FriendInvitation.findOne({
    senderId: userId,
    receiverId: targetUser._id,
  })

  if (invitationAlreadyRecieved) {
    return res.status(409).send('Invitation has been already Sent')
  }

  //check if the invited user is already our friend
  const usersAlreadyFriend = targetUser.friends.find(friendId =>
    friendId.toString() === userId.toString()
  )

  if (usersAlreadyFriend) {
    return res.status(409).send('User is already your friend!')
  }

  //if all conditions are false then send the invitaion
  const newInvitation = await FriendInvitation.create({
    senderId: userId,
    receiverId: targetUser._id
  })

  //if invitation has been successfully created we would like to update the friend invitation of the targetuser

  //send pending invitations update to specific user
  friendUpdate.updateFriendsPendingInvitations(targetUser._id.toString())

  return res.send('Inviation has been sent!')
}

module.exports = postInvite