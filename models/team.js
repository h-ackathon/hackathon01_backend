const mongoose = require('mongoose');
const {Schema} = mongoose;

const TeamSchema = new Schema({
    name: String,
    flag_path: String,
    key: String,
    league: {type: String, ref: 'leagues'}
});

module.exports = mongoose.model('teams', TeamSchema);