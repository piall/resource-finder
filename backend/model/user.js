const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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

module.exports = mongoose.model('user', userSchema);
