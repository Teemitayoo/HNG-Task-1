const express = require('express');
const detailsController = require('./../controllers/detailsController');

const router = express.Router();

router.route('/').get(detailsController.getMe);

module.exports = router;