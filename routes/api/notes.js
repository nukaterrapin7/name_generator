const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes')

router.get('/record', notesCtrl.record);

router.post('/notes', notesCtrl.addNote);

module.exports = router;