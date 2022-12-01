const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes')

router.post('/:id', notesCtrl.addNote);

router.delete('/:id', notesCtrl.delete);

module.exports = router;