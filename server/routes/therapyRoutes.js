const express = require('express');
const router = express.Router();
const therapyController = require('../controllers/therapyController');

router.get('/', therapyController.getAllTherapies);
router.post('/', therapyController.createTherapy);

module.exports = router;
