const Conversation = require('../../models/conversation')
const chatUpdate = require('./updates/chat')

const directChatHistoryHandler = async (socket, data) => {
  try {

    const { userId } = socket.user;
    const { receiverId } = data;

    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverId] },
      type: 'DIRECT'
    })

    if (conversation) {
      chatUpdate.updateChatHistory(conversation._id.toString(), socket.id)
    }

  } catch (error) {
    console.log(error)
  }
}

module.exports = directChatHistoryHandler