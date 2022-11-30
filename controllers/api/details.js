const Detail = require('../../models/detail')
const Note = require('../../models/note');


module.exports = {
    addDetail,
}

async function addDetail(req, res) {
    console.log("details")
    // console.log(req.params.id, req.body)
    const note = await Note.findById(req.params.id)
    note.details = req.body.detail
    await note.save()
    res.json(note)
}
