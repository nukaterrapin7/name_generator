const express = require('express');
const router = express.Router();
const detailsCtrl = require('../../controllers/api/details')

// router.get('/details', detailsCtrl.getAll);

router.post('/details', detailsCtrl.addDetail);

module.exports = router;