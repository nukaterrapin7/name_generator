const savedName = require('../../models/savedName');


module.exports = {
    addNote,
    delete: deleteNote
}

async function addNote(req, res) {
    const saved = await savedName.findById(req.params.id)
    saved.notes = req.body.note
    await saved.save()
    res.json(saved)
}

async function deleteNote(req, res) {
    const saved = await savedName.findById(req.params.id)
    saved.notes = ''
    await saved.save()
    console.log(saved)
    res.json(saved)
}