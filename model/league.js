const mongoose = require('mongoose');
const {Schema} = mongoose;

const LeagueSchema = new Schema({
    name: String,
    key: String
});

module.exports = mongoose.model('leagues', LeagueSchema);