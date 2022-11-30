const mongoose = require('mongoose')
const Schema = mongoose.Schema

const detailSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String }
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

module.exports = mongoose.model('Detail', detailSchema)