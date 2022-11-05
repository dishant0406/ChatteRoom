const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const Schema = mongoose.Schema

var messageSchema = new Schema({

  author: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  content: { type: String },
  date: { type: Date },
  type: { type: String }

});

//Export the model
module.exports = mongoose.model('Message', messageSchema);