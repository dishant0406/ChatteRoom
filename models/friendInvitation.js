const mongoose = require('mongoose')


const Schema = mongoose.Schema;

const friendInvitationSchema = new Schema({
  senderId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  receiverId: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  }
})

module.exports = mongoose.model('FriendInvitation', friendInvitationSchema)