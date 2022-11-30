const Note = require('../../models/note');

module.exports = {
    getAll,
    addNote,
    getOne,
};

async function getAll(req, res) {
    const notes = await Note.find({user: req.user._id})
    console.log(notes)
    res.json(notes)
}

async function addNote(req, res) {
    const record = await Note.create({user:req.user._id, name:req.body.name})
    console.log(record)
    res.json(record)
}

async function getOne(req, res) {    
    
    const details = await Note.findById(req.params.id)
    console.log("details", details)
    res.json(details)
}
