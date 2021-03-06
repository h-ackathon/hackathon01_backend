const mongoose = require('mongoose');
const {Schema} = mongoose;

const StatSchema = new Schema({
    league: {type: String, ref: 'leagues'},
    match: {type: Schema.Types.ObjectId, ref: 'matches'},
    player: {type: Schema.Types.ObjectId, ref: 'players'},
    catches: Number,
    stump_outs: Number,
    run_outs: Number,
    runs_scored: Number,
    balls_played: Number,
    wickets_taken: Number,
    balls_bowled: Number,
    runs_given: Number,
    sixes: Number,
    fours: Number,
    extras: Number,
});

module.exports = mongoose.model('stats', StatSchema);