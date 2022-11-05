const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const Schema = mongoose.Schema

var conversationSchema = new Schema({

  participants: [
    {
      type: Schema.Types.Object,
      ref: 'user'
    }
  ],
  messages: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Message'
    }
  ]

});

//Export the model
module.exports = mongoose.model('Conversation', conversationSchema);