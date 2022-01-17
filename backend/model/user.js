const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userID: {
    type: String,
    unique: true,
    immutable: true,
  },
  name: String,
  email: String,
  password: String,
  votedTopics: [String],
  votedAutors: [String],
  isAdmin: Boolean,
  isUser: Boolean,
  token: String,
  accountDisabled: Boolean,
});

module.exports = mongoose.model('resource', userSchema);
