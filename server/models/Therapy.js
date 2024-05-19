const mongoose = require('mongoose');

const TherapySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  therapist: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Therapy', TherapySchema);
