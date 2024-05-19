// server/routes/peerSupportRoutes.js
const express = require('express');
const router = express.Router();
const peerSupportController = require('../controllers/peerSupportController');

router.get('/', peerSupportController.getAllPeerSupports);
router.post('/', peerSupportController.createPeerSupport);

// Additional routes for update and delete can be added here.

module.exports = router;
