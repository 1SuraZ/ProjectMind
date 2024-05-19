const mongoose = require('mongoose');

const PeerSupportSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  peer: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('PeerSupport', PeerSupportSchema);
