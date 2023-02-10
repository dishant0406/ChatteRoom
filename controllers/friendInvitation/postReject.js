const FriendInvitation = require('../../models/friendInvitation')
const friendsUpdates = require('../../socketServer/socketHandlers/updates/friends')


const postReject = async (req, res) => {
  try {
    const { id } = req.body;
    const { userId } = req.user;


    //remove that invitation from the invitation collections
    const invitationExisits = await FriendInvitation.exists({ _id: id })


    if (invitationExisits) {
      await FriendInvitation.findByIdAndDelete(id)
    }

    //update pending invitaion
    friendsUpdates.updateFriendsPendingInvitations(userId)


    return res.status(200).send('Invitations rejected successfully')

  } catch (error) {
    console.log(error)
    return res.status(500).send('Something went wrong try again!')
  }

}

module.exports = postReject;