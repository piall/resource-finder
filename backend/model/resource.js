const mongoose = require('mongoose');
const voteSchema = require('./vote');

const resourceSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  title: String,
  description: String,
  vote: voteSchema,
  topicID: {
    type: mongoose.Types.ObjectId,
  },
  userID: {
    type: mongoose.Types.ObjectId,
    // unique: true,
    // immutable: true,
  },
});

module.exports = mongoose.model('resource', resourceSchema);
