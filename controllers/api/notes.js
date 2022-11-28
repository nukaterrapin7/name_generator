const Note = require('../../models/note');

module.exports = {
    record,
    addNote,
};

async function record(req, res) {
    const record = await Note.getRecord(req.user._id)
    res.json(record)
}

async function addNote(req, res) {
    const record = await Note.getRecord(req.user_id)
    await record.addGenNameToRecord(req.params.id)
    res.json(record)
}