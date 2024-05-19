const PeerSupport = require('../models/PeerSupport');

exports.getAllPeerSupports = async (req, res) => {
  try {
    const peerSupports = await PeerSupport.find();
    res.json(peerSupports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPeerSupport = async (req, res) => {
  const peerSupport = new PeerSupport({
    title: req.body.title,
    description: req.body.description,
    peer: req.body.peer,
  });

  try {
    const newPeerSupport = await peerSupport.save();
    res.status(201).json(newPeerSupport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
