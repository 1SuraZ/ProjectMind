// server/routes/beMindfulRoutes.js
const express = require('express');
const router = express.Router();
const beMindfulController = require('../controllers/beMindfulController');

router.get('/', beMindfulController.getAllBeMindful);
router.post('/', beMindfulController.createBeMindful);

// Additional routes for update and delete can be added here.

module.exports = router;
