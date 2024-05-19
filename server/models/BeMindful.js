const mongoose = require('mongoose');

const BeMindfulSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  guide: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('BeMindful', BeMindfulSchema);
