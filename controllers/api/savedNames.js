const savedName = require('../../models/savedName');

module.exports = {
    getAll,
    addSavedName,
    getOne,
};

async function getAll(req, res) {
    const savedNames = await savedName.find({user: req.user._id})
    console.log(savedNames)
    res.json(savedNames)
}

async function addSavedName(req, res) {
    const savedNames = await savedName.create({user:req.user._id, name:req.body.name})
    console.log(savedNames)
    res.json(savedNames)
}

async function getOne(req, res) {    
    const notes = await savedName.findById(req.params.id)
    console.log("notes", notes)
    res.json(notes)
}
