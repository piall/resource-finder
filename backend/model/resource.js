const mongoose = require('mongoose');
const voteSchema = require('./vote');

const resourceSchema = new mongoose.Schema({
  link: {
    type: String,
    required: true,
  },
  title: String,
  description: String,
  image: String,
  vote: voteSchema,
  topicID: {
    type: mongoose.Types.ObjectId,
  },
  userID: {
    type: mongoose.Types.ObjectId,
  },
});

module.exports = mongoose.model('resource', resourceSchema);
