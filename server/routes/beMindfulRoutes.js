const express = require('express');
const router = express.Router();
const beMindfulController = require('../controllers/beMindfulController');

router.get('/', beMindfulController.getAllBeMindful);
router.post('/', beMindfulController.createBeMindful);

module.exports = router;
