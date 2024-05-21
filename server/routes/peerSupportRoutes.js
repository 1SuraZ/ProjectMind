const express = require('express');
const router = express.Router();
const peerSupportController = require('../controllers/peerSupportController');

router.get('/', peerSupportController.getAllPeerSupports);
router.post('/', peerSupportController.createPeerSupport);

module.exports = router;
