const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

module.exports = mongoose.model('Note', noteSchema)