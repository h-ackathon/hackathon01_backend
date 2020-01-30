const mongoose = require('mongoose')
const {Schema} = mongoose

const ts = new Schema({
    n: {type: String, required: [true, 'Team name is required']},
    i: String,
    l: {type: Schema.Types.ObjectId, ref: 'leagues'}
})

module.exports = mongoose.model('teams', ts)