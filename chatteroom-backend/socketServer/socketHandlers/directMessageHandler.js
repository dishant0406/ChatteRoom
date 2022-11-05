const Message = require('../../models/message')
const Conversation = require('../../models/conversation')
const chatUpdates = require('./updates/chat')

const directMessageHandler = async (socket, data) => {

  console.log('event handled')
  try {

    const { userId } = socket.user;

    const { receiverId, content } = data


    //*create new message
    const message = await Message.create({
      content: content,
      author: userId,
      date: new Date(),
      type: 'DIRECT'
    })

    //! Find if conversation exists with this two users - if not create new
    const conversation = await Conversation.findOne({
      participants: { $all: [userId, receiverId] }
    })


    if (conversation) {
      conversation.messages.push(message._id);
      await conversation.save();

      //perform the updates to sender and receiver if is online
      chatUpdates.updateChatHistory(conversation._id.toString())
    }
    else {
      //create new conversation if not exists
      const newConversation = await Conversation.create({
        messages: [message._id],
        participants: [userId, receiverId]
      })

      //perform and update ti sender and reveriver
      chatUpdates.updateChatHistory(newConversation._id.toString())
    }

  } catch (error) {
    console.log(error)
  }
}

module.exports = directMessageHandler