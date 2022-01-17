const mongoose = require('mongoose');
const voteSchema = require('./vote');

const resourceSchema = new mongoose.Schema({
  resourceID: {
    type: String,
    unique: true,
    immutable: true,
  },
  topicID: {
    type: String,
    immutable: true,
  },
  link: {
    type: String,
    required: true,
  },
  addedBy: {
    type: String,
    unique: true,
    immutable: true,
  },
  title: String,
  description: String,
  vote: voteSchema,
});

module.exports = mongoose.model('resource', resourceSchema);
