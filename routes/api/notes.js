const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes')

router.get('/notes', notesCtrl.getAll);

router.post('/notes', notesCtrl.addNote);

router.get('/details/:id', notesCtrl.getOne);

module.exports = router;