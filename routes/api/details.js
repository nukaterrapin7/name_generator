const express = require('express');
const router = express.Router();
const detailsCtrl = require('../../controllers/api/details')

router.post('/:id', detailsCtrl.addDetail);

router.delete('/:id', detailsCtrl.delete);

module.exports = router;