const mongoose = require('mongoose')
const Schema = mongoose.Schema

const savedNameSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    name: { type: String },
    notes: { type: String, default: ""}
}, {
    timestamps: true,
    toJSON: { virtuals: true }
})

module.exports = mongoose.model('savedName', savedNameSchema)