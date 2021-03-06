const mongoose = require('mongoose');
const {Schema} = mongoose;

const PlayerSchema = new Schema({
    name: String,
    avatar_path: String,
    is_bowler: {type: Boolean, default: false},
    is_batsman: {type: Boolean, default: false},
    is_all_rounder: {type: Boolean, default: false},
    is_captain: {type: Boolean, default: false},
    is_vice_captain: {type: Boolean, default: false},
    is_wicket_keeper: {type: Boolean, default: false},
    teams: [{type: String, ref: 'teams'}]
});

module.exports = mongoose.model('players', PlayerSchema);