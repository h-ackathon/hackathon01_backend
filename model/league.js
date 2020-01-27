const mongoose = require('mongoose')
const {Schema} = mongoose

const ls = new Schema({
    n: {type: String, required: [true, 'League name is required']},
    i: String,
    s: {type: Schema.Types.ObjectId, ref: 'sports'}
})

module.exports = mongoose.model('leagues', ls)