const mongoose = require('mongoose');
const {Schema} = mongoose;

const ss = new Schema({
    n: {type: String, required: [true, 'Sport name is required']},
    i: String,
    t: {type: String, default: 'team'}
});

module.exports = mongoose.model('sports', ss);