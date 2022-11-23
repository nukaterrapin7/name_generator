const mongoose = require('mongoose')
const Schema = mongoose.Schema

const noteSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true }
    hasNotes: { type: Boolean, default: false }
})