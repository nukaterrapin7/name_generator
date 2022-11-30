const express = require('express');
const router = express.Router();
const detailsCtrl = require('../../controllers/api/details')

router.post('/:id', detailsCtrl.addDetail);

module.exports = router;