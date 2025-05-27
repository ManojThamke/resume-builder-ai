const mongoose = require('mongoose');

const resumeSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  template: { type: mongoose.Schema.Types.ObjectId, ref: 'Template' },
  data: {
    name: String,
    email: String,
    phone: String,
    education: [String],
    experience: [String],
    skills: [String],
    summary: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resume', resumeSchema);
