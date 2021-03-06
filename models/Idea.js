const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const IdeaSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  technologies: {
    type: String,
    required: true
  },
  features: [
    {
      type: String,
      required: true

    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Idea = mongoose.model('ideas', IdeaSchema);