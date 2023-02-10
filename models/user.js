const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const Schema = mongoose.Schema;
var userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    index: true,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  friends: [{ type: Schema.Types.Object, ref: 'user' }]
});

//Export the model
module.exports = mongoose.model('user', userSchema);