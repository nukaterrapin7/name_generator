const savedName = require('../../models/savedName');

module.exports = {
    getAll,
    addSavedName,
    getOne,
};

async function getAll(req, res) {
    const savedNames = await savedName.find({user: req.user._id})
    res.json(savedNames)
}

async function addSavedName(req, res) {
    const savedNames = await savedName.create({user:req.user._id, name:req.body.name})
    res.json(savedNames)
}

async function getOne(req, res) {    
    const notes = await savedName.findById(req.params.id)
    res.json(notes)
}
