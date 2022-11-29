const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes')

router.get('/notes', notesCtrl.getAll);

router.post('/notes', notesCtrl.addNote);

module.exports = router;