const Detail = require('../../models/detail')
const Note = require('../../models/note');


module.exports = {
    addDetail,
    delete: deleteDetail
}

async function addDetail(req, res) {
    const note = await Note.findById(req.params.id)
    note.details = req.body.detail
    await note.save()
    res.json(note)
}

async function deleteDetail(req, res) {
    const note = await Note.findById(req.params.id)
    note.details = ''
    await note.save()
    console.log(note)
    res.json(note)
}