const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  topicID: {
    type: String,
    unique: true,
    immutable: true,
  },
  name: {
    type: String,
    unique: true,
  },
  icon: String,
});

module.exports = mongoose.model('resource', topicSchema);
