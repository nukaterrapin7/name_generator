const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes')

router.get('/notes', notesCtrl.getAll);

router.post('/notes', notesCtrl.addNote);

router.get('/notes/:id', notesCtrl.getOne);

module.exports = router;