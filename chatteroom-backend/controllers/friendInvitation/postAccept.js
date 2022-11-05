const FriendInvitation = require('../../models/friendInvitation')
const User = require('../../models/user')
const friendsUpdates = require('../../socketServer/socketHandlers/updates/friends')


const postAccept = async (req, res) => {

  try {
    const { id } = req.body;

    const invitation = await FriendInvitation.findById(id);

    if (!invitation) {
      return res.status(401).send('Error! Try reloading')
    }

    const { senderId, receiverId } = invitation;

    //add friends to both user
    const senderUser = await User.findById(senderId);
    senderUser.friends = [...senderUser.friends, receiverId];

    const receiverUser = await User.findById(receiverId);
    receiverUser.friends = [...receiverUser.friends, senderId];

    await senderUser.save();
    await receiverUser.save();

    //delete invitaion
    await FriendInvitation.findByIdAndDelete(id)

    //update list of the friends if the user are online
    friendsUpdates.updateFriends(receiverId.toString())
    friendsUpdates.updateFriends(senderId.toString())

    //update the list of friends pending inviation
    friendsUpdates.updateFriendsPendingInvitations(receiverId.toString())

    return res.status(200).send('Friend Added Successfully')

  } catch (error) {
    console.log(error)
    res.status(500).send('Something went wrong.Please try again!')
  }
}

module.exports = postAccept;