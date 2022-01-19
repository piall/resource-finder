const mongoose = require('mongoose');

const votedAuthor = {
  authorID: mongoose.Types.ObjectId,
  topicID: mongoose.Types.ObjectId,
};

const votedResource = {
  resourceID: mongoose.Types.ObjectId,
  vote: String,
};

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  votedAutors: [votedAuthor],
  votedResources: [votedResource],
  isAdmin: Boolean,
  isUser: Boolean,
  accountDisabled: Boolean,
});

module.exports = mongoose.model('user', userSchema);
