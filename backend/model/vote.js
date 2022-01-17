const mongoose = require('mongoose');

const voteSchema = mongoose.Schema({
  beginner: Number,
  intermediate: Number,
  advance: Number,
});

module.exports = voteSchema;
