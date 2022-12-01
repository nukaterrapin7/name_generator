const express = require('express');
const router = express.Router();
const savedNamesCtrl = require('../../controllers/api/savedNames')

router.get('/savedNames', savedNamesCtrl.getAll);

router.post('/savedNames', savedNamesCtrl.addSavedName);

router.get('/notes/:id', savedNamesCtrl.getOne);

module.exports = router;