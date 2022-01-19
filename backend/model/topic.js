const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  icon: String,
});

module.exports = mongoose.model('topic', topicSchema);
