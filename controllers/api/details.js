const Detail = require('../../models/detail')

module.exports = {
    getAll,
    addDetail,
}

// async function getAll(req, res) {
//     const details = await Detail.find({user: req.user._id})
//     console.log(details)
//     res.json(details)
// }

async function addDetail(req, res) {
    const ideas = await Detail.create({user:req.user._id, name:req.body.name, detail:req.body.detail})
    console.log(ideas)
    res.json(ideas)
}
